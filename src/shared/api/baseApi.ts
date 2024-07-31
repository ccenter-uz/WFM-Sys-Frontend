// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = "https://api.example.com";

// export const baseApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   endpoints: () => ({}),
// });

import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { EXAMPLE_TAG } from "./tags";

export const baseApi = createApi({
  tagTypes: [EXAMPLE_TAG],
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
