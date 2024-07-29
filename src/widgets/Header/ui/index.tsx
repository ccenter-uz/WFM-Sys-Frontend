import { Avatar } from "antd";
import { Header } from "antd/es/layout/layout";
import { FC } from "react";
import "./style.css";

export const HeaderContent: FC = () => {
  return (
    <header id="header">
      <Header className="header-content">
        <div className="about-user">
          <p>Azizov Aziz</p>
          <span>Оператор</span>
        </div>
        <Avatar className="user-avatar" />
        <p className="user-cabinet">Личный кабинет</p>
      </Header>
    </header>
  );
};
