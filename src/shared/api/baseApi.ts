import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { EXAMPLE_TAG } from "./tags";

export const baseApi = createApi({
  tagTypes: [EXAMPLE_TAG],
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
