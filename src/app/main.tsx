import React from "react";
import ReactDOM from "react-dom/client";

import "/src/app/style/global.css";

import { Allproviders } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Allproviders />
  </React.StrictMode>,
);
