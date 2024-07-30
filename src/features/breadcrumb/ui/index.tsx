import { Breadcrumb } from "antd";
import { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LinkName } from "@shared/index";

type Props = {
  hasBackButton?: boolean;
};

export const Breadcrumbs: FC<Props> = (props) => {
  const { hasBackButton = false } = props;
  const location = useLocation();
  const url = location.pathname.slice(1);
  const navigate = useNavigate();

  const getPureCurrentLocation = () => {
    if (location?.pathname === "/") return [{ title: "Главная" }];
    if (hasBackButton) {
      return Array.from([
        {
          title: (
            <Link to="" onClick={() => navigate(-1)}>
              назад
            </Link>
          ),
        },
        {
          title: LinkName[`${url}`],
        },
      ]);
    }
    return Array.from([
      {
        title: LinkName[`${url}`],
      },
    ]);
  };

  return <Breadcrumb items={getPureCurrentLocation()} />;
};
