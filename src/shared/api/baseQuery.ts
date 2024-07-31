import { BaseQueryFn } from "@reduxjs/toolkit/query";
import type {
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../lib/env";

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  object,
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: env.VITE_API_ENDPOINT,

  // Setting Header to API call for Authorization:
  // prepareHeaders: (headers, { getState }) => {
  //   const { accessToken } = (getState() as RootState).session;

  //   if (accessToken) {
  //     headers.set("Authorization", `Bearer ${accessToken}`);
  //   }

  //   return headers;
  // },
});
