// Next/React Imports
import { useRouter } from "next/router";
import { useEffect } from "react";

// Component Imports

// Function/Image/Data Imports
import ApplyCursor from "../../../functions/dom/manip/cursor/ApplyCursor";

// Library Imports

// Styles
import styles from "../../../styles/modules/Global_Components/Global_Components.module.css";

export const Cursor = () => {
  const router = useRouter();

  // Applying Cursor
  useEffect(() => {
    ApplyCursor();

    // window.addEventListener("resize", () => {
    //   ApplyCursor();
    // });

    // window.addEventListener("load", () => {
    //   ApplyCursor();
    // });

    // window.addEventListener("popstate", () => {
    //   ApplyCursor();
    // });

    // router.events.on("routeChangeComplete", () => {
    //   ApplyCursor();
    // });
  }, [router]);

  return (
    <div id="cursor" className={`${styles.cursor}`}>
      <div id="cursorMain" className={`${styles.cursor_main}`} />

      <div className={`${styles.cursor_cnt_inner} half-second`} id="cursorCnt">
        <span />
      </div>
    </div>
  );
};
