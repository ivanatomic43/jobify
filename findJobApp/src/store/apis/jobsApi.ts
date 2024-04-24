import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ShowJobDto } from '../../types/content-types'

const jobsApi = createApi({
  reducerPath: 'jobs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints(builder) {
    return {
      fetchJobs: builder.query<ShowJobDto[], void>({
        query: () => {
          return {
            url: '/jobs',
            method: 'GET',
          }
        },
      }),
    }
  },
})

export const { useFetchJobsQuery } = jobsApi
export { jobsApi }
