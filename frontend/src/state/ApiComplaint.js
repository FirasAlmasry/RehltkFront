
import { api } from "./apiTours";

export const ApiComplaint = api.injectEndpoints({
  reducerPath: "apiTours",
  tagTypes: ["complaint"],
  endpoints: (build) => ({
    addComplaint: build.mutation({
      query: (build) => ({
        url: '/complaints',
        method: 'POST',
        body: build,
      }),
      invalidatesTags: ['complaint'],
    }),
  }),
});


export const {
  useAddComplaintMutation,
} = ApiComplaint;