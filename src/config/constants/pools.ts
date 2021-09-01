import BigNumber from 'bignumber.js'
import { BANANA_PER_BLOCK } from 'config'
import { PoolConfig, QuoteToken, PoolCategory } from './types'
import poolList from '../data/pools.json'

const getPoolCategory = (category) => {
  switch (category) {
    case PoolCategory.APEZONE:
      return PoolCategory.APEZONE
    case PoolCategory.BINANCE:
      return PoolCategory.BINANCE
    case PoolCategory.COMMUNITY:
      return PoolCategory.COMMUNITY
    case PoolCategory.CORE:
      return PoolCategory.CORE
    default:
      return PoolCategory.CORE
  }
}

const pools: PoolConfig[] = poolList.map((pool) => (
  {
    sousId: Number(pool.sousId),
    tokenName: pool.tokenName,
    image: pool.image,
    stakingTokenName: pool.stakingTokenName,
    stakingTokenAddress: pool.stakingTokenAddress, // BANANA token address
    contractAddress: pool.contractAddress,
    poolCategory: getPoolCategory(pool.poolCategory),
    projectLink: pool.projectLink,
    harvest: pool.harvest,
    tokenPerBlock: (new BigNumber(pool.rewardPerBlock).dividedBy(new BigNumber(10).pow(new BigNumber(pool.tokenDecimals)))).toString(),
    sortOrder: pool.sortOrder,
    isFinished: pool.isFinished,
    tokenDecimals: pool.tokenDecimals,
  }
));

export default pools
