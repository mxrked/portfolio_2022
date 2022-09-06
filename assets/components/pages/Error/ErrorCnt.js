// Next/React Imports
import { useRouter } from "next/router";

// Component Imports

// Function/Image/Data Imports
import PageRouting from "../../../functions/routing/PageRouting";

// Library Imports

// Styles
import styles from "../../../styles/modules/Error/Error.module.css";

export const ErrorCnt = (props) => {
  const router = useRouter();

  // Checkers
  let indexRouted = false;

  return (
    <section id="errorCnt" className={`${styles.error_cnt}`}>
      <div className={`${styles.error_cnt_inner}`}>
        <span className={styles.error_cnt_above_heading}>OH NO!</span>
        <h1>{props.errorCode}</h1>

        <p>{props.errorDescription}</p>

        <div
          className={`${styles.error_cnt_link} cursor-hover half-second`}
          onClick={() => {
            PageRouting(router, "/", "/portfolio/", indexRouted);
          }}
        >
          <span className="half-second">Go Home</span>
        </div>
      </div>
    </section>
  );
};
