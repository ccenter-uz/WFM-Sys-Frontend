import { FC } from "react";
import { AntdProvider } from "./antd";
import { BrowserProvider } from "./router";

export const Allproviders: FC = () => {
  return (
    <AntdProvider>
      <BrowserProvider />
    </AntdProvider>
  );
};
