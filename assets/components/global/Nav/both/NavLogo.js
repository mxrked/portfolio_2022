// Next/React Imports
import { useRouter } from "next/router";

// Component Imports

// Function/Image/Data Imports
import PageRouting from "../../../../functions/routing/PageRouting";

// Library Imports
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Styles
import styles from "../../../../styles/modules/Nav/Nav.module.css";

export const NavLogo = () => {
  const router = useRouter();

  // Checkers
  let indexRouted = false;

  return (
    <div id="navLogo" className={`${styles.nav_logo} half-second`}>
      <div
        className={`${styles.nav_logo_inner}`}
        onClick={() => {
          PageRouting(router, "/", "/portfolio/", indexRouted);
        }}
      >
        <IoIosArrowBack className={`${styles.icon} half-second`} />

        <span className="half-second" />

        <IoIosArrowForward className={`${styles.icon} half-second`} />
      </div>
    </div>
  );
};
