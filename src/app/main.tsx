import React from "react";
import ReactDOM from "react-dom/client";

import "/src/app/style/global.css";

import { Allproviders } from "./providers";

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
