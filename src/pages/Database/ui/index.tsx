import { Breadcrumb, Tabs } from "antd";
import { FC } from "react";
import { BirthdaysPage } from "@widgets/birthdays";
import { Employees } from "@widgets/employees";
import { PositionsPage } from "@widgets/positions";
// eslint-disable-next-line
import "./style.css";
import { getPureCurrentLocation } from "@shared/index";

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
