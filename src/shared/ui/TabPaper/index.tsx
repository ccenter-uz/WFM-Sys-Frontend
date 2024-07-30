import { FC, ReactNode } from "react";
import "./style.css";

type Props = {
  children: ReactNode;
};

export const TabPaper: FC<Props> = ({ children }) => {
  return <div id="tab_paper">{children}</div>;
};
