export const arrowKeyNavigation = (
  path: string,
  board: number,
  min: number,
  max: number,
) => {
  if (typeof document === "undefined") return;

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      if (+board === max) return;
      window.location.replace(`/${path}/board/${Number(board) + 1}`);
    }
    if (e.key === "ArrowLeft") {
      if (+board === min) {
        window.location.replace("/");
        return;
      }
      window.location.replace(`/${path}/board/${Number(board) - 1}`);
    }
  });
};

export default arrowKeyNavigation;
