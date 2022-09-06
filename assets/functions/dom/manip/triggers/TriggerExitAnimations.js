/*

    This is used to hide page elements when a user leaves the page

*/

export default function TriggerExitAnimations() {
  document.querySelectorAll(".exit-element").forEach((element) => {
    element.style.opacity = 0;
    element.style.visibility = "hidden";
    element.style.pointerEvents = "none";
  });

  return true; // This indicates that the animations have finished exiting
}
