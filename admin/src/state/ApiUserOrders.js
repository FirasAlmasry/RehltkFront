
import { api } from "./apiUser";

export const ApiTours = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["User","addUser"],
  endpoints: (build) => ({
    getUserOrder: build.query({
      query: () => `/user-orders`,
      providesTags: ["users"],
    }),
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
  useGetUserOrderQuery,
  useAddUserOrderMutation,
} = ApiTours;