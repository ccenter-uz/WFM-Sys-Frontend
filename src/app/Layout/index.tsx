import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HeaderContent } from "@widgets/Header";
import { Sidebar } from "@widgets/Sidebar";
import "./style.css";
// eslint-disable-next-line
import { linksType } from "@app/utils/router";

type Props = {
  links: linksType[];
};

const LayoutWrapper: FC<Props> = (props) => {
  const { links } = props;

  return (
    <Layout id="layout">
      <Sidebar links={links} />
      <Layout>
        <HeaderContent />
        <Content className="layout-content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
