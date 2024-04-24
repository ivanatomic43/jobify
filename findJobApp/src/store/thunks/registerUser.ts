import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { config, backendURL } from './config'

export const registerUser = createAsyncThunk<
  void,
  { firstName: string; lastName: string; email: string; password: string }
>('auth/register', async ({ firstName, lastName, email, password }) => {
  try {
    await axios.post(
      `${backendURL}/api/user/register`,
      { firstName, lastName, email, password },
      config,
    )
  } catch (error) {
    console.log(error)
  }
})
