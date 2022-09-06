/*

    This is used to check what this position is for the backToTop btn

*/

export default function CheckBackToTopStatus() {
  const B2T = document.getElementById("backToTop");

  if (window.scrollY <= 50) {
    B2T.style.bottom = "-120px";
  }

  if (window.scrollY > 50) {
    B2T.style.bottom = "20px";
  }
}
