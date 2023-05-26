
import { api } from "./apiUser";

export const ApiTours = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["User","addUser"],
  endpoints: (build) => ({
    getUserOrder: build.query({
      query: ({page, limit}) =>`user-orders?page=${page}&limit=${limit}`,
      // Only have one cache entry because the arg always maps to one string
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      // Always merge incoming data to the cache entry
      merge(currentCacheData, responseData, _meta, args) {
        console.log( responseData.data.page , currentCacheData.data.page)
        console.log("🚀 ~ file: ApiUserOrders.js:17 ~ merge ~ currentCacheData:", currentCacheData)
        console.log("🚀 ~ file: ApiUserOrders.js:17 ~ merge ~ responseData:", responseData)
        if(responseData.data.page === 1 && !currentCacheData.data.page) {
          return responseData;
        }
        if (responseData.data.page > currentCacheData.data.page) {
          currentCacheData.data.userOrders.push(...responseData.data.userOrders);
          currentCacheData.data.page = responseData.data.page 
          return currentCacheData;
        }
          return currentCacheData
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
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