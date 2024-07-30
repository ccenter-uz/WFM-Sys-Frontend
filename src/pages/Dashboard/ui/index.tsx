import { Breadcrumb } from "antd";
import { FC } from "react";
import { getPureCurrentLocation } from "@shared/index";

export const DashboardPage: FC = () => {
  return (
    <div>
      <Breadcrumb items={getPureCurrentLocation({})} />
    </div>
  );
};
