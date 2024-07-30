import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { FC } from "react";
import { Outlet } from "react-router-dom";
// eslint-disable-next-line
import { HeaderContent } from "../../widgets/header";
// eslint-disable-next-line
import { Sidebar } from "../../widgets/sidebar";
// eslint-disable-next-line
import { linksType } from "@app/utils/router";
// eslint-disable-next-line
import "./style.css";

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
        <Content className="layout_content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
