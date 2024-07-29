import { Breadcrumb } from "antd";
import { FC } from "react";
// eslint-disable-next-line
import { getPureCurrentLocation } from "@shared/lib/helpers/getPureCurrentLocation";

export const DashboardPage: FC = () => {
  return (
    <div>
      <Breadcrumb items={getPureCurrentLocation({})} />
    </div>
  );
};
