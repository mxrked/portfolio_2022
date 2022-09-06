import TriggerExitAnimations from "../dom/manip/triggers/TriggerExitAnimations";

/* 

    Gets the route the user wants to go to
    
*/
function GetRoute(rooter, routeDev, routeProd) {
  const env = process.env.NODE_ENV;

  //* On Client
  if (env == "development") {
    // Already on page, deny route push
    if (rooter.pathname == routeDev) {
      console.log("You are already on that page..");
    }

    // Not on current page, accept route push
    if (window.location.href !== routeDev) {
      // console.log("Routing to " + routeDev);
      rooter.push(routeDev, undefined, { shallow: true });
    }
  }

  //* On Server
  if (env == "production") {
    // Already on page, deny route push
    if (
      rooter.pathname ==
      "http://basicallyeasy.com/next-projects/" + routeProd
    ) {
      console.log("You are already on that page..");
    }

    // Not on current page, accept route push
    if (
      window.location.href !==
      "http://basicallyeasy.com/next-projects/" + routeProd
    ) {
      // console.log("Routing to " + routeProd);
      rooter.push("/next-projects/" + routeProd, undefined, { shallow: true });
    }
  }
}

/* 
    Redirects user to their requested route
*/
function PageRouting(rooter, routeDev, routeProd, checkRoute) {
  // TriggerExitAnimations();

  // Making sure the user is at the top of the page before routing
  window.scrollTo(0, 0);
  setTimeout(() => {
    if (window.scrollY === 0) {
      TriggerExitAnimations();

      setTimeout(() => {
        GetRoute(rooter, routeDev, routeProd);
      }, 1200);
    }
  }, 900);

  // Checking to see if the user has not reached the top of the page, it will run certain conditions
  setTimeout(() => {
    if (window.scrollY !== 0) {
      TriggerExitAnimations();
      checkRoute = true;

      setTimeout(() => {
        GetRoute(rooter, routeDev, routeProd);
      }, 1200);
    }
  }, 900);

  // Forces user to page with refresh
  setTimeout(() => {
    if (checkRoute) {
      rooter.reload();
    }
  }, 950);
}

export default PageRouting;
