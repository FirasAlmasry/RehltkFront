
import { api } from "./apiUser";

export const ApiCompany = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["company","addCompany"],
  endpoints: (build) => ({
    getCompany: build.query({
      query: () => `/company-orders`,
      providesTags: ["company"],
    }),
    getCompanyId: build.query({
      query: (id) => `/company-orders/${id}`,
      providesTags: ["company"],
    }),
    addCompany: build.mutation({
      query: (build) => ({
        url: '/company-orders',
        method: 'POST',
        body: build,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['company'],
    }),
    editCompany: build.mutation({
      query: ({formData,id}) => ({
        url: `/company-orders/${id}`,
        method: 'put',
        body: formData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['company'],
    }),
    deleteCompany: build.mutation({
      query: (id) => ({
        url: `/company-orders/${id}`,
        method: 'delete',
        body: build,
      }),
      invalidatesTags: ['company'],
    })
  }),
});


export const {
  useGetCompanyQuery,
  useAddCompanyMutation,
  useEditCompanyMutation,
  useGetCompanyIdQuery,
  useDeleteCompanyMutation
} = ApiCompany;