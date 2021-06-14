export {}

// /* eslint-disable no-param-reassign */
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { ProfileTrading, TradingState } from 'state/types'
// import getProfile from './getProfile'

// const initialState: TradingState = {
//   isInitialized: false,
//   isLoading: true,
//   data: null,
// }

// export const tradingSlice = createSlice({
//   name: 'trading',
//   initialState,
//   reducers: {
//     profileFetchStart: (state) => {
//       state.isLoading = true
//     },
//     profileFetchSucceeded: (state, action: PayloadAction<ProfileTrading>) => {
//       state.isInitialized = true
//       state.isLoading = false
//       state.data[action.payload.address] = action.payload
//     },
//     profileFetchFailed: (state) => {
//       state.isLoading = false
//       state.isInitialized = true
//     },
//   },
// })

// // Actions
// export const { profileFetchStart, profileFetchSucceeded, profileFetchFailed } = tradingSlice.actions

// // Thunks
// export const fetchProfileTrading = (address: string) => async (dispatch) => {
//   try {
//     dispatch(profileFetchStart())
//     const profile = await getProfile(address)
//     dispatch(profileFetchSucceeded(profile))
//   } catch (error) {
//     dispatch(profileFetchFailed())
//   }
// }

// export default tradingSlice.reducer
