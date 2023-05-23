
import { api } from "./apiTours";

export const ApiPagin = api.injectEndpoints({
  reducerPath: "apiTours",
  endpoints: (build) => ({
    listPosts: build.query({
        query: (page = 1) => `posts?page=${page}`,
        providesTags: (result, error, page) =>
          result
            ? [
                // Provides a tag for each post in the current page,
                // as well as the 'PARTIAL-LIST' tag.
                ...result.data.map(({ _id }) => ({ type: 'Posts', _id })),
                { type: 'Posts', _id: 'PARTIAL-LIST' },
              ]
            : [{ type: 'Posts', _id: 'PARTIAL-LIST' }],
      }),
  }),
});


export const {
    useListPostsQuery 
} = ApiPagin;