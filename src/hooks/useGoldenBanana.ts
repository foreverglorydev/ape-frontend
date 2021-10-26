import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { useTreasury } from 'hooks/useContract'
import BigNumber from 'bignumber.js'
import { usePriceBananaBusd } from 'state/hooks'
import { CHAIN_ID } from 'config/constants'
import track from 'utils/track'

export const buy = async (contract, amount, account) => {
  try {
    return contract.methods
      .buy(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } catch (err) {
    return console.error(err)
  }
}

export const sell = async (contract, amount, account) => {
  try {
    return contract.methods
      .sell(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
      .send({ from: account })
      .on('transactionHash', (tx) => {
        return tx.transactionHash
      })
  } catch (err) {
    return console.error(err)
  }
}

export const useSellGoldenBanana = () => {
  const { account } = useWeb3React()
  const treasuryContract = useTreasury()
  const price = usePriceBananaBusd();

  const handleSell = useCallback(
    async (amount: string) => {
      try {
        const txHash = await sell(treasuryContract, amount, account)
        const amountUsd = parseFloat(amount) * price.toNumber();
        track({
          event: 'gnana',
          chain: CHAIN_ID,
          data: {
            amountUsd,
            cat: 'sell',
          },
        })
        return txHash
      } catch (e) {
        return false
      }
    },
    [account, treasuryContract, price],
  )

  return { handleSell }
}

export const useBuyGoldenBanana = () => {
  const { account } = useWeb3React()
  const treasuryContract = useTreasury()
  const price = usePriceBananaBusd();

  const handleBuy = useCallback(
    async (amount: string) => {
      try {
        const txHash = await buy(treasuryContract, amount, account)
        const amountUsd = parseFloat(amount) * price.toNumber();
        track({
          event: 'gnana',
          chain: CHAIN_ID,
          data: {
            amountUsd,
            cat: 'buy',
          },
        })
        return txHash
      } catch (e) {
        return false
      }
    },
    [account, treasuryContract, price],
  )

  return { handleBuy }
}
