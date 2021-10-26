import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import { bid } from 'utils/callHelpers'
import { CHAIN_ID } from 'config/constants'
import track from 'utils/track'
import { usePriceBnbBusd } from 'state/hooks'
import { useAuction } from './useContract'

const useBid = () => {
  const { account } = useWeb3React()
  const auctionContract = useAuction()
  const bnbPrice = usePriceBnbBusd()

  const handleBid = useCallback(
    async (amount, id, auctionId) => {
      try {
        const txHash = await bid(auctionContract, amount, id, account)
        const bigNumber = (num) => {
          return num / 1e18
        }

        const getUsd = (num) => {
          return (bnbPrice.c[0] * bigNumber(num)).toFixed(2)
        }

        const amountUsd = getUsd(amount)

        track({
          event: 'nfa',
          chain: CHAIN_ID,
          data: {
            id,
            auctionId,
            cat: 'bid',
            amountUsd,
          },
        })
        console.info(txHash)
      } catch (e) {
        console.log(e)
      }
    },
    [account, auctionContract, bnbPrice],
  )

  return { onBid: handleBid }
}

export default useBid
