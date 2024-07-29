import { ConfigProvider } from "antd";
import { FC, ReactNode } from "react";
// eslint-disable-next-line
import { theme } from "@app/configs/antd-config";

type Props = {
  children: ReactNode;
};

export const AntdProvider: FC<Props> = ({ children }) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
