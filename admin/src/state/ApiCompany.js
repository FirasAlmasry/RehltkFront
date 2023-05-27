
import { api } from "./apiUser";

export const ApiCompany = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["company","addCompany"],
  endpoints: (build) => ({
    getCompany: build.query({
      query: ({page, limit}) =>`company-orders?page=${page}&limit=${limit}`,
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
          currentCacheData.data.companyOrders.push(...responseData.data.companyOrders);
          currentCacheData.data.page = responseData.data.page 
          return currentCacheData;
        }
          return currentCacheData
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
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