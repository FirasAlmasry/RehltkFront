
import { api } from "./apiUser";

export const ApiEmployment = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["employment","addEmployment"],
  endpoints: (build) => ({
    getEmployment: build.query({
      query: ({page, limit}) =>`employment-applications?page=${page}&limit=${limit}`,
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