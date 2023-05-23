
import { api } from "./apiUser";

export const ApiEmployment = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["employment","addEmployment"],
  endpoints: (build) => ({
    getEmployment: build.query({
      query: () => `/employment-applications`,
      providesTags: ["employments"],
    }),
    getEmploymentId: build.query({
      query: (id) => `/employment-applications/${id}`,
      providesTags: ["employments"],
    }),
    addEmployment: build.mutation({
      query: (build) => ({
        url: '/employment-applications',
        method: 'POST',
        body: build,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['employments'],
    }),
    editEmployment: build.mutation({
      query: ({formData,id}) => ({
        url: `/employment-applications/${id}`,
        method: 'put',
        body: formData
      }),
      invalidatesTags: ['employments'],
    }),
    deleteEmployment: build.mutation({
      query: (id) => ({
        url: `/employment-applications/${id}`,
        method: 'DELETE',
        body: build,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['employments'],
    })
  }),
});


export const {
  useGetEmploymentQuery,
  useAddEmploymentMutation,
  useEditEmploymentMutation,
  useGetEmploymentIdQuery,
  useDeleteEmploymentMutation
} = ApiEmployment;