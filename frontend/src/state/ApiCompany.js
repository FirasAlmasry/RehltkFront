
import { api } from "./apiTours";

export const ApiCompany = api.injectEndpoints({
  reducerPath: "apiTours",
  tagTypes: ["company","addCompany"],
  endpoints: (build) => ({
    addCompany: build.mutation({
      query: (build) => ({
        url: '/company-orders',
        method: 'POST',
        body: build,
      }),
      invalidatesTags: ['company'],
    }),
  }),
});


export const {
  useAddCompanyMutation,
} = ApiCompany;