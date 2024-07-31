import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

import { env } from "@shared/lib/env";
// import { userHandlers } from '@/entities/user/api/__mocks__/cartHandlers'

export const handlers = [
  // userHandlers code example
  http.get(`${env.VITE_API_ENDPOINT}/api/users`, () => {
    return HttpResponse.json({ id: "abc-123" });
  }),
];

const apiMockWorker = setupWorker(...handlers /* ...userHandlers */);

export async function startApiMockWorker() {
  await apiMockWorker.start({
    onUnhandledRequest(request, print) {
      const url = new URL(request.url);

      if (/\.png|jpg|svg|tsx?|css|jsx?|woff2$/.test(url.pathname)) {
        return;
      }

      print.warning();
    },
  });
}
