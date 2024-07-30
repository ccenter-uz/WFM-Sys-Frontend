export const getLinkName: Record<string, string> = {
  database: "База данных сотрудников",
  wfm: "WFM",
  report: "Отчеты",
  schedule: "График",
  allActions: "Все действия",
  monitoring: "Мониторинг",
  "knowledge-management": "Knowledge management",
  voronka: "Воронка продаж",
  tabel: "Табель",
  "report-construct": "Конструктор отчетов",
  chat: "Чат",
  pressure: "Счёт нагрузкки",
};

export const getPureCurrentLocation = ({
  hasBackButton = false,
}: {
  hasBackButton?: boolean;
}) => {
  if (window.document?.location?.pathname === "/")
    return [{ title: "Главная" }];
  if (hasBackButton) {
    return Array.from([
      { title: <a onClick={() => window?.history?.back()}>назад</a> },
      {
        title: getLinkName[`${window.document?.location?.pathname?.slice(1)}`],
      },
    ]);
  }
  return Array.from([
    { title: getLinkName[`${window.document?.location?.pathname?.slice(1)}`] },
  ]);
};
