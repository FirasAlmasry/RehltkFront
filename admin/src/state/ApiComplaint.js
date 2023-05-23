
import { api } from "./apiUser";

export const ApiComplaint = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["complaint","addComplaint"],
  endpoints: (build) => ({
    getComplaint: build.query({
      query: () => `/complaints`,
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