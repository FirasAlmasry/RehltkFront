
import { api } from "./apiUser";

export const ApiSales = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["sales","addSales"],
  endpoints: (build) => ({
    getSales: build.query({
      query: () => `/sales`,
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