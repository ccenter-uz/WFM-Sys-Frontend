import { createBrowserRouter } from "react-router-dom";
// eslint-disable-next-line
import LayoutWrapper from "@app/Layout";
import DashboardPage from "@pages/Dashboard";

export type linksType = {
  index?: boolean;
  path?: string;
  element: JSX.Element;
  title: string;
  icon: string;
  subMenu: [];
};

export const routerLinks: linksType[] = [
  {
    index: true,
    element: <DashboardPage />,
    title: "Дашборд",
    icon: "/menu-icons/dashboard.svg",
    subMenu: [],
  },
  {
    path: "/database",
    element: <DashboardPage />,
    title: "База данных сотрудников",
    icon: "/menu-icons/database.svg",
    subMenu: [],
  },
  {
    path: "/wfm",
    element: <DashboardPage />,
    title: "WFM",
    icon: "/menu-icons/wfm.svg",
    subMenu: [],
  },
  {
    path: "/report",
    element: <DashboardPage />,
    title: "Отчёт",
    icon: "/menu-icons/report.svg",
    subMenu: [],
  },
  {
    path: "/schedule",
    element: <DashboardPage />,
    title: "График",
    icon: "/menu-icons/schedule.svg",
    subMenu: [],
  },
  {
    path: "/allActions",
    element: <DashboardPage />,
    title: "Все действия",
    icon: "/menu-icons/allActions.svg",
    subMenu: [],
  },
  {
    path: "/monitoring",
    element: <DashboardPage />,
    title: "Мониторинг",
    icon: "/menu-icons/monitoring.svg",
    subMenu: [],
  },
  {
    path: "/knowledge-management",
    element: <DashboardPage />,
    title: "Knowledge management",
    icon: "/menu-icons/knowledgeManagement.svg",
    subMenu: [],
  },
  {
    path: "/voronka",
    element: <DashboardPage />,
    title: "Воронка продаж",
    icon: "/menu-icons/voronka.svg",
    subMenu: [],
  },
  {
    path: "/tabel",
    element: <DashboardPage />,
    title: "Табель",
    icon: "/menu-icons/tabel.svg",
    subMenu: [],
  },
  {
    path: "/report-construct",
    element: <DashboardPage />,
    title: "Конструктор отчетов",
    icon: "/menu-icons/reportConstruct.svg",
    subMenu: [],
  },
  {
    path: "/chat",
    element: <DashboardPage />,
    title: "Чат",
    icon: "/menu-icons/chat.svg",
    subMenu: [],
  },
  {
    path: "/pressure",
    element: <DashboardPage />,
    title: "Счёт нагрузкки",
    icon: "/menu-icons/pressure.svg",
    subMenu: [],
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWrapper links={routerLinks} />,
    children: routerLinks,
  },
]);
