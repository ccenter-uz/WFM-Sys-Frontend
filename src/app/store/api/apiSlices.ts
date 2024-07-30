// src/app/api/apiSlices.ts

// Import API slices as needed

export const apiSlices = [
  /* other APIs */
];

export const apiReducers = apiSlices.reduce((acc, api) => {
  // acc[api.reducerPath] = api.reducer;
  return acc;
}, {} as Record<string, any>);

export const apiMiddleware = apiSlices.map((api) => api /* api.middleware */);
