// Next/React Imports
import { useRouter } from "next/router";

// Component Imports

// Function/Image/Data Imports
import PageRouting from "../../../functions/routing/PageRouting";

// Library Imports
import { FaCode } from "react-icons/fa";

// Styles
import styles from "../../../styles/modules/Index/Index.module.css";

export const Top = () => {
  const router = useRouter();

  // Checkers
  let infoRouted = false;
  let projectsRouted = false;
  let contactRouted = false;

  return (
    <section id="indexTop" className={`${styles.index_top} global-blur`}>
      <FaCode className={styles.bg_icon} />

      <div
        data-aos="fade-right"
        className={`${styles.index_top_main_cnt} exit-element full-second`}
      >
        <h1 className="full-second">
          A <span>devloper</span> with <br />a passion to <span>code</span>.
        </h1>

        <p className="full-second">
          Parker Phelps is dedicated to creating the UI and Front End of
          websites with the passion that drives him.
        </p>

        <div
          className={`${styles.index_top_main_cnt_links_holder} full-second`}
        >
          <div
            className={`${styles.index_top_main_cnt_link} cursor-hover full-second`}
            onClick={() => {
              PageRouting(router, "/info/", "/portfolio/info/", infoRouted);
            }}
          >
            <div className="half-second" />
            <span className="half-second">About</span>
          </div>
          <div
            className={`${styles.index_top_main_cnt_link} cursor-hover half-second`}
            onClick={() => {
              PageRouting(
                router,
                "/projects/",
                "/portfolio/projects/",
                projectsRouted
              );
            }}
          >
            <div className="half-second" />
            <span className="half-second">Projects</span>
          </div>
          <div
            className={`${styles.index_top_main_cnt_link} cursor-hover half-second`}
            onClick={() => {
              PageRouting(
                router,
                "/contact/",
                "/portfolio/contact/",
                contactRouted
              );
            }}
          >
            <div className="half-second" />
            <span className="half-second">Contact</span>
          </div>
        </div>
      </div>
    </section>
  );
};
