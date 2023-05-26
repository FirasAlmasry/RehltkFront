import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    baseUrl: 'https://api.reheltk.net/api/v1', prepareHeaders: (headers, { getState }) => {
      headers.set('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)
      return headers
    }
  }),
  reducerPath: "apiUser",
  tagTypes: ["User","addUser"],
  endpoints: (build) => ({
    getUser: build.query({
      query: ({page, limit}) =>`users?page=${page}&limit=${limit}`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge(currentCacheData, responseData, _meta, args) {
        console.log( responseData.data.page , currentCacheData.data.page)
        if(responseData.data.page === 1 && !currentCacheData.data.page) {
          return responseData;
        }
        if (responseData.data.page > currentCacheData.data.page) {
          currentCacheData.data.users.push(...responseData.data.users);
          currentCacheData.data.page = responseData.data.page 
          return currentCacheData;
        }
          return currentCacheData
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ["users"],
    }),
    getUserId: build.query({
      query: (id) => `/users/${id}`,
      providesTags: ["users"],
    }),
    addUser: build.mutation({
      query: (formData) => ({
        url: '/users',
        method: 'POST',
        body: formData,
        
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['users'],
    }),
    editUser: build.mutation({
      query: ({formData,id}) => ({
        url: `/users/${id}`,
        method: 'put',
        body: formData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['users'],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'Delete',
        body: build,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['users'],
    }),
    // listUser: build.query({
    //   query: (page, limit) =>`users?page=${page}&limit=${limit}`,
    // }),
  }),
});


export const {
  useGetUserQuery,
  useAddUserMutation,
  useEditUserMutation,
  useGetUserIdQuery,
  useDeleteUserMutation,
  // useListUserQuery
} = api;