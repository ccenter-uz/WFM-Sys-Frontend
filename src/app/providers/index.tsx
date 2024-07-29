import { FC } from "react";
import { AntdProvider } from "./Antd";
import { BrowserProvider } from "./Router";

export const Allproviders: FC = () => {
  return (
    <AntdProvider>
      <BrowserProvider />
    </AntdProvider>
  );
};
