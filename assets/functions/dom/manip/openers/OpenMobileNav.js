/*

    This is used to open the mobile nav menu

*/

import CheckOverflowY from "../../checkers/CheckOverflowY";
import BlurElements from "../blurring/BlurElements";

export default function OpenMobileNav() {
  sessionStorage.setItem("Mobile Nav Opened", true);
  CheckOverflowY("Mobile Nav Opened");

  const MOBILE_NAV_MENU = document.getElementById("mobileNavMenu");
  const MOBILE_NAV_MENU_CNT = document.getElementById("mobileNavMenuCnt");

  MOBILE_NAV_MENU.style.display = "flex";

  setTimeout(() => {
    MOBILE_NAV_MENU.style.opacity = 1;
    MOBILE_NAV_MENU.style.visibility = "visible";
  }, 300);

  setTimeout(() => {
    MOBILE_NAV_MENU_CNT.style.opacity = 1;
    MOBILE_NAV_MENU_CNT.style.visibility = "visible";
  }, 700);

  setTimeout(() => {
    BlurElements(".mobile-blur");
    BlurElements(".global-blur");
  }, 900);

  setTimeout(() => {
    MOBILE_NAV_MENU.style.pointerEvents = "auto";
  }, 1000);
}
