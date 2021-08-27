import { configureStore } from '@reduxjs/toolkit'
import farmsReducer from './farms'
import toastsReducer from './toasts'
import poolsReducer from './pools'
import profileReducer from './profile'
import statsReducer from './stats'
import statsOverallReducer from './statsOverall'
import teamsReducer from './teams'
import auctionReducer from './auction'
import burningPoolsReducer from './burningPools'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    farms: farmsReducer,
    toasts: toastsReducer,
    pools: poolsReducer,
    burningPools: burningPoolsReducer,
    profile: profileReducer,
    stats: statsReducer,
    statsOverall: statsOverallReducer,
    teams: teamsReducer,
    auctions: auctionReducer,
  },
})
