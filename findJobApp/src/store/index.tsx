import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { jobsApi } from './apis/jobsApi'
import authReducer from './slices/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(jobsApi.middleware)
  },
})

setupListeners(store.dispatch)

export { useFetchJobsQuery } from './apis/jobsApi'
export default store
