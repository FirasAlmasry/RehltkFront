
import { api } from "./apiUser";

export const ApiTours = api.injectEndpoints({
  reducerPath: "apiUser",
  tagTypes: ["tours","adTours"],
  endpoints: (build) => ({
    getTours: build.query({
      query: ({page, limit}) =>`country-tours?page=${page}&limit=${limit}`,
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
          currentCacheData.data.countryTourss.push(...responseData.data.countryTourss);
          currentCacheData.data.page = responseData.data.page 
          return currentCacheData;
        }
          return currentCacheData
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ["tours"],
    }),
    getToursId: build.query({
      query: (id) => `/country-tours/${id}`,
      providesTags: ["tours"],
    }),
    addTours: build.mutation({
      query: (data) => ({
        url: '/country-tours',
        method: 'POST',
        body: data,
        formData: true,
      }),
      invalidatesTags: ['tours'],
    }),
    editTours: build.mutation({
      query: ({formData,id}) => ({
        url: `/country-tours/${id}`,
        method: 'put',
        body: formData,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }),
      invalidatesTags: ['tours'],
    }),
    deleteTours: build.mutation({
      query: (id) => ({
        url: `/country-tours/${id}`,
        method: 'DELETE',
        body: build
      }),
      invalidatesTags: ['tours'],
    })
  }),
});


export const {
  useGetToursQuery,
  useAddToursMutation,
  useEditToursMutation,
  useGetToursIdQuery,
  useDeleteToursMutation
} = ApiTours;