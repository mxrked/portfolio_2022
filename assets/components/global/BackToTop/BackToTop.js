// Next/React Imports
import { useEffect } from "react";
import { useRouter } from "next/router";

// Component Imports

// Function/Image/Data Imports
import CheckBackToTopStatus from "../../../functions/dom/checkers/CheckBackToTopStatus";

// Library Imports
import { FaCaretUp } from "react-icons/fa";

// Styles
import styles from "../../../styles/modules/Global_Components/Global_Components.module.css";

export const BackToTop = () => {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("load", () => {
      CheckBackToTopStatus();
    });

    window.addEventListener("scroll", () => {
      CheckBackToTopStatus();
    });

    router.events.on("routeChangeComplete", () => {
      CheckBackToTopStatus();
    });
  }, [router]);

  return (
    <button
      id="backToTop"
      className={`${styles.back_to_top} half-second`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <FaCaretUp className={styles.icon} />
    </button>
  );
};
