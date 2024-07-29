import { List } from "antd";
import Sider from "antd/es/layout/Sider";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
// eslint-disable-next-line
import { linksType } from "@app/utils/router";

type Props = {
  links: linksType[];
};

export const Sidebar: FC<Props> = (props) => {
  const { links } = props;

  return (
    <aside id="sidebar">
      <Sider className="sidebar-content" width={"var(--sidebar-width)"}>
        <div className="logo">
          <img src="/wfm_logopng.png" alt="logo" aria-label="logo" />
        </div>
        <List className="menu-list">
          {links.map((link) => (
            <List.Item
              key={link.title}
              style={{ padding: "0", border: "none" }}
            >
              <NavLink
                to={link.path || ""}
                className={({ isActive }) =>
                  isActive ? "menu-list-item active_link" : "menu-list-item"
                }
                aria-label={link.title}
              >
                <img src={link.icon} alt="list-icons" />
                {link.title}
              </NavLink>
            </List.Item>
          ))}
        </List>
      </Sider>
    </aside>
  );
};
