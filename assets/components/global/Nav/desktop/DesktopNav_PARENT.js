// Next/React Imports
import { useRouter } from "next/router";
import { useEffect } from "react";

// Component Imports
import { NavLogo } from "../both/NavLogo";
import { ResumeViewerToggler } from "../../ResumeViewer/ResumeViewerToggler";

// Function/Image/Data Imports
import PageRouting from "../../../../functions/routing/PageRouting";

// Library Imports

// Styles
import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const DesktopNav_PARENT = (props) => {
  const router = useRouter();

  // Checkers
  let indexRouted = false;
  let infoRouted = false;
  let projectsRouted = false;
  let contactRouted = false;

  // Changing Active Link Color
  useEffect(() => {
    const LINK_INDEX = props.linkProps;

    document.querySelectorAll(".desktop-nav-link span")[
      LINK_INDEX
    ].style.color = "#adefd1";
  }, []);

  return (
    <nav
      id="desktopNav"
      className={`${styles.desktop_nav} desktop-blur half-second`}
    >
      <div className={`${styles.desktop_nav_box} container-fluid half-second`}>
        <div className={`${styles.desktop_nav_row} row`}>
          <div
            className={`${styles.desktop_nav_side} ${styles.desktop_nav_L} col-lg-4 col-md-4 col-sm-4 col-xs-4`}
          >
            <div className={`${styles.desktop_nav_side_inner}`}>
              <NavLogo />
            </div>
          </div>
          <div
            className={`${styles.desktop_nav_side} ${styles.desktop_nav_R} col-lg-8 col-md-8 col-sm-8 col-xs-8`}
          >
            <div className={`${styles.desktop_nav_side_inner}`}>
              <div className={`${styles.desktop_nav_side_inner_links}`}>
                <ul>
                  <li
                    className={`desktop-nav-link cursor-hover`}
                    onClick={() => {
                      PageRouting(router, "/", "/portfolio/", indexRouted);
                    }}
                  >
                    <span className="half-second">HOME</span>
                  </li>
                  <li
                    className={`desktop-nav-link cursor-hover`}
                    onClick={() => {
                      PageRouting(
                        router,
                        "/info/",
                        "/portfolio/info/",
                        infoRouted
                      );
                    }}
                  >
                    <span className="half-second">ABOUT</span>
                  </li>
                  <li
                    className={`desktop-nav-link cursor-hover`}
                    onClick={() => {
                      PageRouting(
                        router,
                        "/projects/",
                        "/portfolio/projects/",
                        projectsRouted
                      );
                    }}
                  >
                    <span className="half-second">PROJECTS</span>
                  </li>
                  <li
                    className={`desktop-nav-link cursor-hover`}
                    onClick={() => {
                      PageRouting(
                        router,
                        "/contact/",
                        "/portfolio/contact/",
                        contactRouted
                      );
                    }}
                  >
                    <span className="half-second">CONTACT</span>
                  </li>
                </ul>
              </div>

              <div
                className={`${styles.desktop_nav_side_inner_resume_toggler}`}
              >
                <ResumeViewerToggler determineCH="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
