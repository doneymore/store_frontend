import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token; // Use optional chaining
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    validateStatus: (response) =>
      response.status >= 200 && response.status <= 299,
  }),
  endpoints: () => ({}),
  tagTypes: [],
});
