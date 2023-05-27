
import { api } from "./apiUser";

export const ApiComplaint = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["complaint","addComplaint"],
  endpoints: (build) => ({
    getComplaint: build.query({
      query: ({page, limit}) =>`complaints?page=${page}&limit=${limit}`,
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
          currentCacheData.data.complaints.push(...responseData.data.complaints);
          currentCacheData.data.page = responseData.data.page 
          return currentCacheData;
        }
          return currentCacheData
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ["complaint"],
    }),
    getComplaintId: build.query({
      query: (id) => `/complaints/${id}`,
      providesTags: ["complaint"],
    }),
    addComplaint: build.mutation({
      query: (build) => ({
        url: '/complaints',
        method: 'POST',
        body: build,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['complaint'],
    }),
    editComplaint: build.mutation({
      query: ({formData,id}) => ({
        url: `/complaints/${id}`,
        method: 'put',
        body: formData,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
      invalidatesTags: ['complaint'],
    }),
    deleteComplaint: build.mutation({
      query: (id) => ({
        url: `/complaints/${id}`,
        method: 'delete',
        body: build,
      }),
      invalidatesTags: ['complaint'],
    })
  }),
});


export const {
  useGetComplaintQuery,
  useAddComplaintMutation,
  useEditComplaintMutation,
  useGetComplaintIdQuery,
  useDeleteComplaintMutation
} = ApiComplaint;