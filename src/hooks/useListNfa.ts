import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import track from 'utils/track'
import { CHAIN_ID } from 'config/constants'
import { listNfa } from 'utils/callHelpers'
import { usePriceBnbBusd } from 'state/hooks'
import { useAuction } from './useContract'

const useListNfa = () => {
  const { account } = useWeb3React()
  const auctionContract = useAuction()
  const bnbPrice = usePriceBnbBusd()
  const handleListNfa = useCallback(
    async (id, auctionLength, timeToExtend, minimumExtendTime, minimumBid) => {
      try {
        const txHash = await listNfa(
          auctionContract,
          id,
          auctionLength,
          timeToExtend,
          minimumExtendTime,
          minimumBid,
          account,
        )
        const bigNumber = (num) => {
          return num / 1e18
        }

        const getUsd = (num) => {
          return (bnbPrice.c[0] * bigNumber(num)).toFixed(2)
        }
        
        const amountUsd = getUsd(minimumBid)
        track({
          event: 'nfa',
          chain: CHAIN_ID,
          data: {
            cat: 'add-auction',
            id,
            auctionLength,
            extendTime: timeToExtend,
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

  return { onListNfa: handleListNfa }
}

export default useListNfa
