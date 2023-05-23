
import { api } from "./apiTours";

export const ApiCountry = api.injectEndpoints({
  reducerPath: "apiTours",
  tagTypes: ["countrys","addCountry"],
  endpoints: (build) => ({
    getCountry: build.query({
      query: () => `/countrys`,
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