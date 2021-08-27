/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import burningPoolsConfig from 'config/constants/burningPools'
import { fetchReserveData } from 'hooks/api'
import { fetchBurningPoolsBlockLimits, fetchBurningPoolsTotalStatking } from './fetchBurningPools'
import {
  fetchBurningPoolsAllowance,
  fetchBurningUserBalances,
  fetchBurningUserStakeBalances,
  fetchBurningUserPendingRewards,
} from './fetchBurningPoolsUser'
import { BurningPoolsState, BurningPool } from '../types'

const initialState: BurningPoolsState = { data: [...burningPoolsConfig] }
const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const BurningPoolsSlice = createSlice({
  name: 'BurningPools',
  initialState,
  reducers: {
    setBurningPoolsPublicData: (state, action) => {
      const livePoolsData: BurningPool[] = action.payload
      state.data = state.data.map((pool) => {
        const livePoolData = livePoolsData.find((entry) => entry.sousId === pool.sousId)
        return { ...pool, ...livePoolData }
      })
    },
    setBurningPoolsUserData: (state, action) => {
      const userData = action.payload
      state.data = state.data.map((pool) => {
        const userPoolData = userData.find((entry) => entry.sousId === pool.sousId)
        return { ...pool, userData: userPoolData }
      })
    },
    updateBurningPoolsUserData: (state, action) => {
      const { field, value, sousId } = action.payload
      const index = state.data.findIndex((p) => p.sousId === sousId)
      state.data[index] = { ...state.data[index], userData: { ...state.data[index].userData, [field]: value } }
    },
  },
})

// Actions
export const {
  setBurningPoolsPublicData,
  setBurningPoolsUserData,
  updateBurningPoolsUserData,
} = BurningPoolsSlice.actions

// Thunks
export const fetchBurningPoolsPublicDataAsync = () => async (dispatch) => {
  const blockLimits = await fetchBurningPoolsBlockLimits()
  const totalStakings = await fetchBurningPoolsTotalStatking()

  const liveData = await Promise.all(
    burningPoolsConfig.map(async (pool) => {
      const blockLimit = blockLimits.find((entry) => entry.sousId === pool.sousId)
      const totalStaking = totalStakings.find((entry) => entry.sousId === pool.sousId)
      // const lpData = pool.lpStaking ? await fetchReserveData(pool.stakingTokenAddress[CHAIN_ID]) : null
      return {
        ...blockLimit,
        ...totalStaking,
        // lpData,
      }
    }),
  )
  dispatch(setBurningPoolsPublicData(liveData))
}

export const fetchBurningPoolsUserDataAsync = (account) => async (dispatch) => {
  const allowances = await fetchBurningPoolsAllowance(account)
  const stakingTokenBalances = await fetchBurningUserBalances(account)
  const stakedBalances = await fetchBurningUserStakeBalances(account)
  const pendingRewards = await fetchBurningUserPendingRewards(account)

  const userData = burningPoolsConfig.map((pool) => ({
    sousId: pool.sousId,
    allowance: allowances[pool.sousId],
    stakingTokenBalance: stakingTokenBalances[pool.sousId],
    stakedBalance: stakedBalances[pool.sousId],
    pendingReward: pendingRewards[pool.sousId],
  }))
  dispatch(setBurningPoolsUserData(userData))
}

export const updateBurningUserAllowance = (sousId: string, account: string) => async (dispatch) => {
  const allowances = await fetchBurningPoolsAllowance(account)
  dispatch(updateBurningPoolsUserData({ sousId, field: 'allowance', value: allowances[sousId] }))
}

export const updateBurningUserBalance = (sousId: string, account: string) => async (dispatch) => {
  const tokenBalances = await fetchBurningUserBalances(account)
  dispatch(updateBurningPoolsUserData({ sousId, field: 'stakingTokenBalance', value: tokenBalances[sousId] }))
}

export const updateBurningUserStakedBalance = (sousId: string, account: string) => async (dispatch) => {
  const stakedBalances = await fetchBurningUserStakeBalances(account)
  dispatch(updateBurningPoolsUserData({ sousId, field: 'stakedBalance', value: stakedBalances[sousId] }))
}

export const updateBurningUserPendingReward = (sousId: string, account: string) => async (dispatch) => {
  const pendingRewards = await fetchBurningUserPendingRewards(account)
  dispatch(updateBurningPoolsUserData({ sousId, field: 'pendingReward', value: pendingRewards[sousId] }))
}

export default BurningPoolsSlice.reducer
