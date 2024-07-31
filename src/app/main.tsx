import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

import React from "react";
import ReactDOM from "react-dom/client";

import "/src/app/style/global.css";

import { Allproviders } from "./providers";

export const handlers = [
  http.get("http://localhost:3000/api/users", () => {
    return HttpResponse.json({ id: "abc-123" });
  }),
];

const worker = setupWorker(...handlers);

async function initApp() {
  // Move @mswjs worker to lazy import
  const module = await import("@app/apiMockWorker");
  await module.startApiMockWorker();
}

initApp().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <Allproviders />
    </React.StrictMode>,
  );
});
