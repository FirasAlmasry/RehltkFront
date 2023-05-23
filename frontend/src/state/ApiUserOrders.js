
import { api } from "./apiTours";

export const ApiTours = api.injectEndpoints({
  reducerPath: "apiTours",
  tagTypes: ["User","addUser"],
  endpoints: (build) => ({
    addUserOrder: build.mutation({
      query: (formData) => ({
        url: '/user-orders',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['users'],
    }),
  }),
});


export const {
  useAddUserOrderMutation,
} = ApiTours;