import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { config, backendURL } from './config'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const loginUser = createAsyncThunk<
  void,
  { email: string; password: string }
>('auth/login', async ({ email, password }) => {
  try {
    const { data } = await axios.post(
      `${backendURL}/api/user/login`,
      { email, password },
      config,
    )
    // store user's token in local storage
    await AsyncStorage.setItem('token', data.data.token)
    return data
  } catch (error) {
    console.log(error)
  }
})
