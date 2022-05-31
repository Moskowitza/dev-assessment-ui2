import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3030/' }),
  tagTypes: ['People'],
  endpoints: (build) => ({
    getPeople: build.query({
      query: () => 'people',
      providesTags: (result) =>

        result
          ? 
            [
              ...result.map(({ id }) => ({ type: 'People', id })),
              { type: 'People', id: 'LIST' },
            ]
          : 
            [{ type: 'People', id: 'LIST' }],
    }),
  
    getPersonalQuote: build.query({
      query: (id) => `quotes/${id}`,
    }),
    addPerson: build.mutation({
      query(body) {
        return {
          url: 'people',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'People', id: 'LIST' }],
    }),

  })
})

export const {
  useGetPeopleQuery,
  getPersonalQuote,
  useAddPersonMutation
} = api
