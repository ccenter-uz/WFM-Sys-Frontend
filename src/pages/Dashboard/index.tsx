import { Breadcrumb } from "antd";
import { FC } from "react";
// eslint-disable-next-line
import { getPureCurrentLocation } from "@shared/lib/helpers/getPureCurrentLocation";

const DashboardPage: FC = () => {
  return (
    <div>
      <Breadcrumb items={getPureCurrentLocation({})} />
    </div>
  );
};
export default DashboardPage;
