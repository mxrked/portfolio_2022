/*

    This is used to unblur elements

*/
export default function UnBlurElements(elements) {
  document.querySelectorAll(elements).forEach((element) => {
    element.style.filter = "blur(0px)";
    element.style.transform = "scale(1)";
  });
}
