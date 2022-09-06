// Next/React Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Component Imports

// Function/Image/Data Imports
import PageRouting from "../../../../functions/routing/PageRouting";
import CloseMobileNavMenu from "../../../../functions/dom/manip/closers/CloseMobileNavMenu";

// Library Imports

// Styles
import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNavMenu = (props) => {
  const router = useRouter();

  // Checkers
  let indexRouted = false;
  let infoRouted = false;
  let projectsRouted = false;
  let contactRouted = false;

  // Changing Active Link Color
  useEffect(() => {
    const LINK_INDEX = props.linkProps;

    document.querySelectorAll(".mobile-nav-link span")[LINK_INDEX].style.color =
      "#adefd1";
  }, []);

  return (
    <div id="mobileNavMenu" className={`${styles.mobile_nav_menu} full-second`}>
      <div id="mobileNavMenuBG" className={styles.mobile_nav_menu_bg} />

      <div
        id="mobileNavMenuCnt"
        className={`${styles.mobile_nav_menu_cnt} half-second`}
      >
        <div className={`${styles.mobile_nav_menu_cnt_closer_holder}`}>
          <button
            id="mobileNavMenuCloser"
            className="half-second"
            onClick={() => {
              CloseMobileNavMenu();
            }}
          >
            <span className="half-second" />
            <span className="half-second" />
          </button>
        </div>

        <div className={`${styles.mobile_nav_menu_cnt_links}`}>
          <ul>
            <li
              className="mobile-nav-link half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  PageRouting(router, "/", "/portfolio/", indexRouted);
                }, 1400);
              }}
            >
              <span className="half-second">HOME</span>
            </li>
            <br />
            <li
              className="mobile-nav-link half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  PageRouting(router, "/info/", "/portfolio/info/", infoRouted);
                }, 1400);
              }}
            >
              <span className="half-second">ABOUT</span>
            </li>
            <br />
            <li
              className="mobile-nav-link half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  PageRouting(
                    router,
                    "/projects/",
                    "/portfolio/projects/",
                    projectsRouted
                  );
                }, 1400);
              }}
            >
              <span className="half-second">PROJECTS</span>
            </li>
            <br />
            <li
              className="mobile-nav-link half-second"
              onClick={() => {
                CloseMobileNavMenu();

                setTimeout(() => {
                  PageRouting(
                    router,
                    "/contact/",
                    "/portfolio/contact/",
                    contactRouted
                  );
                }, 1400);
              }}
            >
              <span className="half-second">CONTACT</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
