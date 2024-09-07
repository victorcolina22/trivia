export const getBoardParam = () => {
  if (typeof window === "undefined") return null;
  const boardNumber = window.location.pathname.split("/").at(-1);
  return boardNumber;
};
