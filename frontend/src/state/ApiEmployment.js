
import { api } from "./apiTours";

export const ApiEmployment = api.injectEndpoints({
  reducerPath: "apiTours",
  tagTypes: ["employment","addEmployment"],
  endpoints: (build) => ({
    addEmployment: build.mutation({
      query: (build) => ({
        url: '/employment-applications',
        method: 'POST',
        body: build,
      }),
      invalidatesTags: ['employments'],
    }),
  }),
});


export const {
  useAddEmploymentMutation,
} = ApiEmployment;