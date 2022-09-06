/*

    This is used to check if the user is on either desktop or mobile devices

*/
import BlurElements from "../manip/blurring/BlurElements";
import UnBlurElements from "../manip/blurring/UnBlurElements";

export default function CheckUserDevice(desktopChecker, mobileChecker) {
  if (window.innerWidth > 992) {
    desktopChecker = true;
    mobileChecker = false;

    if (desktopChecker) {
      console.log("User is on a Desktop.");

      // This will check if the user has the mobile nav opened, and will allow to scroll on desktop
      if (sessionStorage.getItem("Mobile Nav Opened")) {
        document.getElementById("mobileNavMenu").style.display = "none";

        document.body.style.pointerEvents = "auto";
        document.body.style.overflowY = "auto";

        UnBlurElements(".desktop-blur");
        UnBlurElements(".global-blur");
      }

      if (
        !sessionStorage.getItem("Mobile Nav Opened") &&
        !sessionStorage.getItem("Resume Viewer Opened")
      ) {
        UnBlurElements(".desktop-blur");
        UnBlurElements(".global-blur");
      }
    }
  }

  if (window.innerWidth <= 992) {
    desktopChecker = false;
    mobileChecker = true;

    if (mobileChecker) {
      console.log("User is on a Mobile Device.");

      // This will check if the user has the mobile nav opened, and prevent scrolling on mobile
      if (sessionStorage.getItem("Mobile Nav Opened")) {
        // Redisplaying menu if opened
        document.getElementById("mobileNavMenu").style.display = "flex";
        document.getElementById("mobileNavMenu").style.pointerEvents = "auto";

        document.body.style.pointerEvents = "none";
        document.body.style.overflowY = "hidden";

        BlurElements(".global-blur");
      }

      if (
        !sessionStorage.getItem("Mobile Nav Opened") &&
        !sessionStorage.getItem("Resume Viewer Opened")
      ) {
        UnBlurElements(".mobile-blur");
        UnBlurElements(".global-blur");
      }
    }
  }
}
