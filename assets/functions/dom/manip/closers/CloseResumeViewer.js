/*

    This is used to close the resume viewer

*/

import UnBlurElements from "../blurring/UnBlurElements";
import CheckOverflowY from "../../checkers/CheckOverflowY";

export default function CloseResumeViewer() {
  const RESUME_VIEWER = document.getElementById("resumeViewer");
  const RESUME_VIEWER_CNT = document.getElementById("resumeViewerCnt");

  RESUME_VIEWER.style.pointerEvents = "none";
  RESUME_VIEWER_CNT.style.opacity = 0;
  RESUME_VIEWER_CNT.style.visibility = "hidden";

  UnBlurElements(".mobile-blur");
  UnBlurElements(".desktop-blur");
  UnBlurElements(".global-blur");

  setTimeout(() => {
    RESUME_VIEWER.style.opacity = 0;
    RESUME_VIEWER.style.visibility = "hidden";
  }, 800);

  setTimeout(() => {
    sessionStorage.removeItem("Resume Viewer Opened");
    CheckOverflowY("Resume Viewer Opened");
  }, 1600);
}
