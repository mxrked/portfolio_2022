/*

    This is used to apply the custom made cursor to users browser

*/

export default function ApplyCursor() {
  const CURSOR = document.getElementById("cursor");
  const CURSOR_CNT = document.getElementById("cursorCnt");

  if (window.innerWidth > 992) {
    document.addEventListener("mousemove", (e) => {
      CURSOR.setAttribute(
        "style",
        "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 20) + "px"
      );
    });

    document.querySelectorAll(".cursor-hover").forEach((hover) => {
      hover.addEventListener("mouseenter", () => {
        CURSOR_CNT.style.transform =
          "translateY(-15%) translateX(-25%) rotate(45deg)";
      });

      hover.addEventListener("mouseleave", () => {
        CURSOR_CNT.style.transform =
          "translateY(-15%) translateX(-25%) rotate(0deg)";
      });
    });
  }
}
