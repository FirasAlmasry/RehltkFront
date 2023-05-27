import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const api = createApi({
  baseQuery: fetchBaseQuery({
    mode: 'cors',
    // baseUrl: 'http://localhost:8000/api/v1'
    baseUrl: 'https://api.reheltk.net/api/v1'
  }),
  reducerPath: "apiTours",
  tagTypes: ["tours","adTours"],
  endpoints: (build) => ({
    getTours: build.query({
      query: () => `/country-tours`,
      providesTags: ["tours"],
    }),
    getToursId: build.query({
      query: (id) => `/country-tours/${id}`,
      providesTags: ["tours"],
    }),
    addTours: build.mutation({
      query: (data) => ({
        url: '/country-tours',
        method: 'POST',
        body: data,
        formData: true,
      }),
      invalidatesTags: ['tours'],
    }),
    editTours: build.mutation({
      query: ({formData,id}) => ({
        url: `/country-tours/${id}`,
        method: 'put',
        body: formData,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }),
      invalidatesTags: ['tours'],
    }),
    deleteTours: build.mutation({
      query: (id) => ({
        url: `/country-tours/${id}`,
        method: 'DELETE',
        body: build
      }),
      invalidatesTags: ['tours'],
    })
  }),
});


export const {
  useGetToursQuery,
  useAddToursMutation,
  useEditToursMutation,
  useGetToursIdQuery,
  useDeleteToursMutation
} = api;