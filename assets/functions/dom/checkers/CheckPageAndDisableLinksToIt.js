/*

    This is used to check if the user is on the page and it will disable the 
    links that lead to that page to prevent repeated routing

    * One version is for a single link
    * The other version is for the navs and footer

*/
function CheckingPageAndDisablingLink_Single(link) {
  link.style.opacity = 0.5;
  link.style.pointerEvents = "none";
}

function CheckingPageAndDisablingLink_NavsAndFooter(
  desktopIndex,
  mobileIndex,
  footerIndex
) {
  document.querySelectorAll(".desktop-nav-link")[
    desktopIndex
  ].style.opacity = 0.5;
  document.querySelectorAll(".desktop-nav-link")[
    desktopIndex
  ].style.pointerEvents = "none";

  document.querySelectorAll(".mobile-nav-link")[
    mobileIndex
  ].style.opacity = 0.5;
  document.querySelectorAll(".mobile-nav-link")[
    mobileIndex
  ].style.pointerEvents = "none";

  document.querySelectorAll(".footer-link")[footerIndex].style.opacity = 0.5;
  document.querySelectorAll(".footer-link")[footerIndex].style.pointerEvents =
    "none";
}

export {
  CheckingPageAndDisablingLink_NavsAndFooter,
  CheckingPageAndDisablingLink_Single,
};
