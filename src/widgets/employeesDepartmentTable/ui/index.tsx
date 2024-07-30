import { Table, Tooltip } from "antd";
import { FC } from "react";
import "./style.css";

export const EmployeesDepartmentTable: FC = () => {
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
      title: "Действия",
      dataIndex: "action",
      key: "action",
      render: () => (
        <div className="action-col">
          <Tooltip title="Редактировать">
            <div className="image-wrapper">
              <img src="pen.svg" alt="edit" />
            </div>
          </Tooltip>
          <Tooltip title="Удалить">
            <div className="image-wrapper">
              <img src="trash.svg" alt="delete" />
            </div>
          </Tooltip>
        </div>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      employee: "Иванов И.И.",
      children: [
        {
          key: "1-1",
          employee: "Иванов И.И.",
          number: "111",
          position: "Инженер",
          category: "Администратор",
        },
      ],
    },
    {
      key: "2",
      employee: "Петрова П.П.",
      number: "222",
      position: "Инженер",
      category: "Администратор",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      size="small"
      className="employeesDepartmentTable"
    />
  );
};
