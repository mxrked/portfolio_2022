/*

    This is used to blur elements 

*/
export default function BlurElements(elements) {
  document.querySelectorAll(elements).forEach((element) => {
    element.style.filter = "blur(3px)";
    element.style.transform = "scale(1.01)";
  });
}
