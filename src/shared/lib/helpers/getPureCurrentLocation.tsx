export const getLinkName = (url: string) => {
  switch (url) {
    case "database":
      return "База данных сотрудников";
    case "wfm":
      return "WFM";
    case "report":
      return "Отчеты";
    case "schedule":
      return "График";
    case "allActions":
      return "Все действия";
    case "monitoring":
      return "Мониторинг";
    case "knowledge-management":
      return "Knowledge management";
    case "voronka":
      return "Воронка продаж";
    case "tabel":
      return "Табель";
    case "report-construct":
      return "Конструктор отчетов";
    case "chat":
      return "Чат";
    case "pressure":
      return "Счёт нагрузкки";
  }
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
      { title: getLinkName(window.document?.location?.pathname?.slice(1)) },
    ]);
  }
  return Array.from([
    { title: getLinkName(window.document?.location?.pathname?.slice(1)) },
  ]);
};
