/*

    This is used to close the mobile nav menu

*/

import UnBlurElements from "../blurring/UnBlurElements";
import CheckOverflowY from "../../checkers/CheckOverflowY";

export default function CloseMobileNavMenu() {
  const MOBILE_NAV_MENU = document.getElementById("mobileNavMenu");
  const MOBILE_NAV_MENU_CNT = document.getElementById("mobileNavMenuCnt");

  MOBILE_NAV_MENU.style.pointerEvents = "none";
  MOBILE_NAV_MENU_CNT.style.opacity = 0;
  MOBILE_NAV_MENU_CNT.style.visibility = "hidden";

  UnBlurElements(".mobile-blur");
  UnBlurElements(".global-blur");

  setTimeout(() => {
    MOBILE_NAV_MENU.style.opacity = 0;
    MOBILE_NAV_MENU.style.visibility = "hidden";
  }, 800);

  setTimeout(() => {
    sessionStorage.removeItem("Mobile Nav Opened");
    CheckOverflowY("Mobile Nav Opened");
  }, 1600);
}
