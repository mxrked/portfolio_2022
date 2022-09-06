/*

    This is used to open the resume viewer

*/

import CloseMobileNavMenu from "../closers/CloseMobileNavMenu";
import CheckOverflowY from "../../checkers/CheckOverflowY";
import BlurElements from "../blurring/BlurElements";

export default function OpenResumeViewer() {
  // This will check if the user has the mobile nav opened, it will close it and will open the resume viewer
  if (sessionStorage.getItem("Mobile Nav Opened")) {
    sessionStorage.removeItem("Mobile Nav Opened");
    CloseMobileNavMenu();

    // Wait for the mobileNavMenu to close
    setTimeout(() => {
      sessionStorage.setItem("Resume Viewer Opened", true);
      CheckOverflowY("Resume Viewer Opened");
    }, 1610);
  } else {
    sessionStorage.setItem("Resume Viewer Opened", true);
    CheckOverflowY("Resume Viewer Opened");
  }

  const RESUME_VIEWER = document.getElementById("resumeViewer");
  const RESUME_VIEWER_CNT = document.getElementById("resumeViewerCnt");

  RESUME_VIEWER.style.overflowY = "hidden";

  RESUME_VIEWER.style.display = "flex";

  setTimeout(() => {
    RESUME_VIEWER.style.opacity = 1;
    RESUME_VIEWER.style.visibility = "visible";
  }, 300);

  setTimeout(() => {
    RESUME_VIEWER_CNT.style.opacity = 1;
    RESUME_VIEWER_CNT.style.visibility = "visible";
  }, 700);

  setTimeout(() => {
    BlurElements(".desktop-blur");
    BlurElements(".mobile-blur");
    BlurElements(".global-blur");
  }, 900);

  setTimeout(() => {
    RESUME_VIEWER.style.pointerEvents = "auto";
  }, 1000);
}
