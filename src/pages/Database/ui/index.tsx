import { Tabs } from "antd";
import { FC } from "react";
import { BirthdaysPage } from "@widgets/Birthdays";
import { Employees } from "@widgets/Employees";
import { PositionsPage } from "@widgets/Positions";
import { Breadcrumbs } from "@features/index";
import "./style.css";

export const DatabasePage: FC = () => {
  return (
    <div id="database">
      <Breadcrumbs />
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
