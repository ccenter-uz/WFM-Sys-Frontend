import { Breadcrumb, Tabs } from "antd";
import { FC } from "react";
import { BirthdaysPage } from "@widgets/Birthdays";
import { Employees } from "@widgets/Employees";
import { PositionsPage } from "@widgets/Positions";
// eslint-disable-next-line
import { getPureCurrentLocation } from "@shared/lib/helpers/getPureCurrentLocation";
import "./style.css";

export const DatabasePage: FC = () => {
  return (
    <div id="database">
      <Breadcrumb items={getPureCurrentLocation({})} />
      <Tabs
        defaultActiveKey="1"
        type="card"
        items={[
          {
            key: "1",
            label: <span>Сотрудники</span>,
            children: <Employees />,
          },
          {
            key: "2",
            label: <span>Должности</span>,
            children: <PositionsPage />,
          },
          {
            key: "3",
            label: <span>Дни рождения</span>,
            children: <BirthdaysPage />,
          },
        ]}
      />
    </div>
  );
};
