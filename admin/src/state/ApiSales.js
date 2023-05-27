
import { api } from "./apiUser";

export const ApiSales = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["sales","addSales"],
  endpoints: (build) => ({
    getSales: build.query({
      query: ({page, limit}) =>`sales?page=${page}&limit=${limit}`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge(currentCacheData, responseData, _meta, args) {
        if(responseData.data.page === 1 && !currentCacheData.data.page) {
          return responseData;
        }
        if (responseData.data.page > currentCacheData.data.page) {
          currentCacheData.data.saless.push(...responseData.data.saless);
          currentCacheData.data.page = responseData.data.page 
          return currentCacheData;
        }
          return currentCacheData
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ["sales"],
    }),
    getSalesId: build.query({
      query: (id) => `/sales/${id}`,
      providesTags: ["sales"],
    }),
    addSales: build.mutation({
      query: (build) => ({
        url: '/sales',
        method: 'POST',
        body: build,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['sales'],
    }),
    editSales: build.mutation({
      query: ({formData,id}) => ({
        url: `/sales/${id}`,
        method: 'put',
        body: formData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['sales'],
    }),
    deleteSales: build.mutation({
      query: (id) => ({
        url: `/sales/${id}`,
        method: 'DELETE',
        body: build,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['sales'],
    }),
  }),
});


export const {
  useGetSalesQuery,
  useAddSalesMutation,
  useEditSalesMutation,
  useGetSalesIdQuery,
  useDeleteSalesMutation
} = ApiSales;