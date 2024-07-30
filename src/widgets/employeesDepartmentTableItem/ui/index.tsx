import { Flex, Table } from "antd";
import { FC } from "react";
import "./style.css";

export const EmployeesDepartmentTableItem: FC = () => {
  const columns = [
    {
      title: "Сотрудники",
      dataIndex: "employee",
      key: "employee",
      render: (text: string) => (
        <div className="employee-col">
          <img src="folder.svg" alt="folder" />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Номер",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Должность",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Категория",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Время от",
      dataIndex: "date_from",
      key: "date_from",
    },
    {
      title: "Время до",
      dataIndex: "date_to",
      key: "date_to",
    },
  ];
  const data = [
    {
      key: "1",
      employee: "Иванов Иван",
      number: "123",
      position: "Оператор",
      category: "Менеджер",
      date_from: "12:00",
      date_to: "12:00",
    },
  ];

  return (
    <div className="employeesDepartmentTableItem">
      <Flex
        align="center"
        gap={"16px"}
        style={{ marginBottom: "20px", color: "var(--color-secondary)" }}
      >
        <Flex align="center" gap={"8px"}>
          <p>Ваканты на декретное место</p>
          <img src="arrow-down.svg" alt="arrow" />
        </Flex>
        <Flex align="center" gap={"8px"}>
          <img src="folder.svg" alt="folder" width={"16px"} height={"16px"} />
          <p>225 Контакт центр</p>
          <img src="arrow-down.svg" alt="arrow" />
          <p>23</p>
        </Flex>
      </Flex>
      <Table
        className="table"
        pagination={false}
        size="small"
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
