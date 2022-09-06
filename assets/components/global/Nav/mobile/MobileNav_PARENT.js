// Next/React Imports

// Component Imports
import { NavLogo } from "../both/NavLogo";
import { ResumeViewerToggler } from "../../ResumeViewer/ResumeViewerToggler";

// Function/Image/Data Imports
import OpenMobileNav from "../../../../functions/dom/manip/openers/OpenMobileNav";

// Library Imports

// Styles
import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const MobileNav_PARENT = () => {
  return (
    <nav
      id="mobileNav"
      className={`${styles.mobile_nav} mobile-blur half-second`}
    >
      <div className={`${styles.mobile_nav_box} container-fluid`}>
        <div className={`${styles.mobile_nav_row} row`}>
          <div
            className={`${styles.mobile_nav_side} ${styles.mobile_nav_L} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
          >
            <div className={`${styles.mobile_nav_side_inner}`}>
              <NavLogo />
            </div>
          </div>
          <div
            className={`${styles.mobile_nav_side} ${styles.mobile_nav_R} col-lg-6 col-md-6 col-sm-6 col-xs-6`}
          >
            <div className={`${styles.mobile_nav_side_inner}`}>
              <button
                id="mobileNavToggler"
                className={`${styles.mobile_nav_toggler} half-second`}
                onClick={() => {
                  OpenMobileNav();
                }}
              >
                <span className="half-second" />
                <span />
                <span className="half-second" />
              </button>

              <ResumeViewerToggler determineCH="false" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
