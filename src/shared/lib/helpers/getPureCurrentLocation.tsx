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
      { title: window.document?.location?.pathname?.slice(1) },
    ]);
  }
  return Array.from([{ title: window.document?.location?.pathname?.slice(1) }]);
};
