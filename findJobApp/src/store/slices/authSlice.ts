import { createSlice } from '@reduxjs/toolkit'
import { UserProfile } from '../../types/content-types'
import { registerUser, loginUser } from '../thunks'

export interface AuthState {
  loading: boolean
  userInfo: UserProfile
  userToken: string | null
  error: string | null
  success: boolean
}

const initialState: AuthState = {
  loading: false,
  userInfo: {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  },
  userToken: null,
  error: null,
  success: false,
}


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login user
    builder.addCase(loginUser.pending, state => {
      state.loading = true
      state.error = null
    })
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loading = false
      //@ts-ignore
      state.userInfo = payload
      //@ts-ignore
      state.userToken = payload.userToken
    })
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error = payload as string
    })
    // register user
    builder.addCase(registerUser.pending, state => {
      state.loading = true
      state.error = null
    })
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    })
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.loading = false
      state.error =
        payload instanceof Error ? payload.message : 'An error occurred'
    })
  },
})
export default authSlice.reducer
