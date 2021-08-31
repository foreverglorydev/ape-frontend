import { BurningPoolConfig, PoolCategory } from './types'

const burningPools: BurningPoolConfig[] = [
  // START SOUS AT 1
  {
    sousId: 1,
    tokenName: 'BANANA',
    image: 'BANANA.svg',
    stakingTokenName: 'GNANA',
    stakingTokenAddress: {
      97: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
      56: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
    },
    contractAddress: {
      97: '0x28734b675A2402aF73cE345389970BB51Bc5780c',
      56: '0x922fb8fEDd34A777F596122830423059594dfb32',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://apeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.000138888888888888',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lockBlock: 10407146,
  },
  {
    sousId: 2,
    tokenName: 'BANANA',
    image: 'BANANA.svg',
    stakingTokenName: 'GNANA',
    stakingTokenAddress: {
      97: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
      56: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
    },
    contractAddress: {
      97: '0x28734b675A2402aF73cE345389970BB51Bc5780c',
      56: '0x7c625d49CCDEC6c6Fb0611f388Aa64d6A2626876',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://apeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.000138888888888888',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lockBlock: 10407185,
  },
  {
    sousId: 5,
    tokenName: 'BANANA',
    image: 'BANANA.svg',
    stakingTokenName: 'GNANA',
    stakingTokenAddress: {
      97: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
      56: '0xddb3bd8645775f59496c821e4f55a7ea6a6dc299',
    },
    contractAddress: {
      97: '0x28734b675A2402aF73cE345389970BB51Bc5780c',
      56: '0x504dA3B8B3E4f2C00CF41102f9B07338Cdae9277',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://apeswap.finance/',
    harvest: true,
    tokenPerBlock: '0.000017361111111111',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
    lockBlock: 10519009,
  },
]

export default burningPools
