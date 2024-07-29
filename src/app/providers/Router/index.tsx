import { RouterProvider } from "react-router-dom";
// eslint-disable-next-line
import { router } from "@app/utils/router";

export const BrowserProvider = () => {
  return <RouterProvider router={router} />;
};
