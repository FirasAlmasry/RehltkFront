
import { api } from "./apiTours";

export const ApiCountry = api.injectEndpoints({
  reducerPath: "apiTours",
  tagTypes: ["countrys","addCountry"],
  endpoints: (build) => ({
    getCountry: build.query({
      query: ({page, limit}) =>`countrys?page=${page}&limit=${limit}`,
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
          currentCacheData.data.countrys.push(...responseData.data.countrys);
          currentCacheData.data.page = responseData.data.page 
          return currentCacheData;
        }
          return currentCacheData
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg
      },
      providesTags: ["countrys"],
    }),
    getCountryId: build.query({
      query: (id) => `/countrys/${id}`,
      providesTags: ["countrys"],
    }),
    addCountry: build.mutation({
      query: (data) => ({
          url: "/countrys",
          method: "POST",
          body: data,
          formData: true,
      }),
      invalidatesTags: ["countrys"],
  }),
    editCountry: build.mutation({
      query: ({formData,id}) => ({
        url: `/countrys/${id}`,
        method: 'put',
        body: formData,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
      }),
      invalidatesTags: ['countrys'],
    }),
    deleteCountry: build.mutation({
      query: (id) => ({
        url: `/countrys/${id}`,
        method: 'DELETE',
        body: build,
      }),
      invalidatesTags: ['countrys'],
    })
  }),
});


export const {
  useGetCountryQuery,
  useAddCountryMutation,
  useEditCountryMutation,
  useGetCountryIdQuery,
  useDeleteCountryMutation
} = ApiCountry;