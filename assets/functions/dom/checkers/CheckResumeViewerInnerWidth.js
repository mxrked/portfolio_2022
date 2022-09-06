/*

    This is used to check if the user is on mobile or desktop and it will determine if it 
    show keep or remove the cursor-hover classes on the resume viewer elements

*/

export default function CheckResumeViewerInnerWidth() {
  const CLOSER = document.getElementById("resumeViewerCloser");
  const LINKS = document.querySelectorAll(".resume-link");

  if (window.innerWidth > 992) {
    CLOSER.classList.add("cursor-hover");

    LINKS.forEach((link) => {
      link.classList.add("cursor-hover");
    });
  }

  if (window.innerWidth <= 992) {
    if (CLOSER.classList.contains("cursor-hover")) {
      CLOSER.classList.remove("cursor-hover");
    } else {
      CLOSER.classList.remove("cursor-hover");
    }

    LINKS.forEach((link) => {
      if (link.classList.contains("cursor-hover")) {
        link.classList.remove("cursor-hover");
      } else {
        link.classList.remove("cursor-hover");
      }
    });
  }
}
