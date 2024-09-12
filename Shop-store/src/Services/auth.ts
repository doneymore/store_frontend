import { api } from "./api";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    testJsonCall: builder.query<any, void>({
      query: () => "/posts",
    }),
  }),
});

export const { useTestJsonCallQuery } = authApi;

//
