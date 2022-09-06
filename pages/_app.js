// Next/React Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Component Imports

// Function/Image/Data Imports
import CheckUserDevice from "../assets/functions/dom/checkers/CheckUserDevice";
import ClearingStorages from "../assets/functions/dom/clearers/ClearingStorages";
import CheckOverflowY from "../assets/functions/dom/checkers/CheckOverflowY";

// Library Imports
import "bootstrap/dist/css/bootstrap.min.css";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import NProgress from "nprogress";

import AOS from "aos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styles
import "../assets/styles/tools/global_classnames/global_classnames.css";
import "../assets/styles/tools/overrides/overrides.css";
import "../assets/styles/tools/resets/resets.css";

import "aos/dist/aos.css";
import "../assets/styles/tools/library_styles/nprogress/nprogress.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  //! Clearing Storages
  useEffect(() => {
    ClearingStorages(); // On load, after refresh

    // Back button
    window.addEventListener("popstate", () => {
      ClearingStorages();
      CheckOverflowY("Mobile Nav Opened");
      CheckOverflowY("Resume Viewer Opened");
    });
  }, []);
  useEffect(() => {
    // When route changes
    router.events.on("routeChangeStart", () => {
      ClearingStorages();
      CheckOverflowY("Mobile Nav Opened");
      CheckOverflowY("Resume Viewer Opened");
    });
  }, [router, router.events]);

  //! Initializing NProgress
  useEffect(() => {
    // NProgress.done();

    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });

    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
  }, [router, router.events]);

  //! Initializing AOS
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "mobile",
      delay: 500,
      duration: 1000,
    });
  }, [router, router.events]);

  //! Showing All exit-elements (This is to fix the issue of the elements disappearing after reaching a page)
  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".exit-element").forEach((element) => {
        element.style.opacity = 1;
        element.style.visibility = "visible";
      });
    }, 300);
  }, []);

  //! Check User Current Device
  useEffect(() => {
    let desktopChecker = false;
    let mobileChecker = false;

    if (document.readyState === "complete") {
      setTimeout(() => {
        CheckUserDevice(desktopChecker, mobileChecker);
      }, 300);
    }

    window.addEventListener("resize", () => {
      CheckUserDevice(desktopChecker, mobileChecker);
    });
  });

  return <Component {...pageProps} />;
}

export default MyApp;
