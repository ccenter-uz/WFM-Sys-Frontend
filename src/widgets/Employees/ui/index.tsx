import { Divider } from "antd";
import { FC } from "react";
import { EmployeesDepartmentTable } from "@widgets/employeesDepartmentTable";
import { EmployeesDepartmentTableItem } from "@widgets/employeesDepartmentTableItem";
import { TabPaper } from "@shared/index";

export const Employees: FC = () => {
  return (
    <TabPaper>
      <EmployeesDepartmentTable />
      <Divider style={{ margin: "16px 0" }} />
      <EmployeesDepartmentTableItem />
    </TabPaper>
  );
};
