/* 

    This is used to check if the user has a certain cookie in the storages, and 
    it will either enable or disable vertical scrolling.

*/
export default function CheckOverflowY(cookie) {
  if (sessionStorage.getItem(cookie) || localStorage.getItem(cookie)) {
    document.body.style.pointerEvents = "none";
    document.body.style.overflowY = "hidden";
  }

  if (!sessionStorage.getItem(cookie) && !localStorage.getItem(cookie)) {
    document.body.style.pointerEvents = "auto";
    document.body.style.overflowY = "auto";
  }
}
