// Next/React Imports
import { useRouter } from "next/router";

// Component Imports

// Function/Image/Data Imports
import PageRouting from "../../../functions/routing/PageRouting";

import {
  AFRESHPLACE,
  ANIMEX,
  GRAPEVINES,
  ONLYJOJO,
  WORKOUTAPP,
} from "../../../data/PROJECT_OBJS";

// Library Imports
import { FaGithub, FaGlobe, FaInfoCircle, FaTimes } from "react-icons/fa";
import { BackgroundImage } from "react-image-and-background-image-fade";

// Styles
import styles from "../../../styles/modules/Index/Index.module.css";

const CurrentProject = (props) => {
  return (
    <div
      className={`${styles.index_current_project} index-project col-lg-6 col-md-6 col-sm-12 col-xs-12`}
      id={props.projectID}
    >
      <div className={`${styles.index_current_project_inner}`}>
        <BackgroundImage
          src={props.projectCover}
          width="100%"
          height="100%"
          className={styles.index_current_project_bg}
        />

        <div className={`${styles.index_current_project_bg_overlay}`} />

        <button
          className={`${styles.index_current_project_info_overlay_toggler} cursor-hover full-second info-overlay-toggler`}
          onClick={(e) => {
            const TOGGLER = e.currentTarget;
            const INFO = e.currentTarget
              .closest(".index-project")
              .querySelector(".info-overlay");

            TOGGLER.style.opacity = 0;
            TOGGLER.style.visibility = "hidden";
            TOGGLER.style.pointerEvents = "none";

            setTimeout(() => {
              INFO.style.opacity = 1;
              INFO.style.visibility = "visible";
              INFO.style.pointerEvents = "auto";
            }, 500);
          }}
        >
          <div>
            <span>View Info</span>
            <FaInfoCircle className={styles.icon} />
          </div>
        </button>

        <div
          className={`${styles.index_current_project_info_overlay} full-second info-overlay`}
        >
          <button
            className={`${styles.index_current_project_info_overlay_closer} cursor-hover half-second info-overlay-closer`}
            onClick={(e) => {
              const TOGGLER = e.currentTarget
                .closest(".index-project")
                .querySelector(".info-overlay-toggler");
              const INFO = e.currentTarget
                .closest(".index-project")
                .querySelector(".info-overlay");

              INFO.style.opacity = 0;
              INFO.style.visibility = "hidden";
              INFO.style.pointerEvents = "none";

              setTimeout(() => {
                TOGGLER.style.opacity = 1;
                TOGGLER.style.visibility = "visible";
                TOGGLER.style.pointerEvents = "auto";
              }, 500);
            }}
          >
            <span>Hide</span>
            <FaTimes className={styles.icon} />
          </button>

          <div className={`${styles.index_current_project_info_overlay_cnt}`}>
            <span className={`${styles.index_current_project_name}`}>
              {props.projectName}
            </span>

            <p>{props.projectDescription}</p>

            <div className={`${styles.index_current_project_links}`}>
              <div
                className="cursor-hover"
                onClick={() => {
                  window.location.href = props.projectLive;
                }}
              >
                <FaGlobe className={`${styles.icon} half-second`} />

                <span className="half-second">Visit</span>
              </div>

              <div
                className="cursor-hover"
                onClick={() => {
                  window.location.href = props.projectCode;
                }}
              >
                <FaGithub className={`${styles.icon} half-second`} />

                <span className="half-second">Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CurrentProjects = () => {
  const router = useRouter();

  // Checkers
  let projectsRouted = false;

  return (
    <section
      id="indexCurrentProjects"
      className={`${styles.index_current_projects} global-blur`}
    >
      <div
        data-aos="fade-in"
        data-aos-duration="1000"
        className={`${styles.index_current_projects_inner}`}
      >
        <div
          className={`${styles.index_current_projects_top} exit-element half-second`}
        >
          <h1>
            Projects<span>/</span>Creations.
          </h1>

          <p>
            View or dive into the code of all the current creations that Parker
            has built from scratch, and with that fiery passion he has to learn
            and code.
          </p>

          <div
            className={`${styles.index_current_projects_top_link} cursor-hover`}
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

            <span className="half-second">View All</span>
          </div>
        </div>

        <div
          className={`${styles.index_current_projects_box} container-fluid exit-element half-second`}
        >
          <div className={`${styles.index_current_projects_row} row`}>
            <CurrentProject
              projectID={AFRESHPLACE.getId}
              projectCover={AFRESHPLACE.getBg}
              projectName={AFRESHPLACE.getName}
              projectDescription={AFRESHPLACE.getDescription}
              projectLive={AFRESHPLACE.getLive}
              projectCode={AFRESHPLACE.getCode}
            />
            <CurrentProject
              projectID={ANIMEX.getId}
              projectCover={ANIMEX.getBg}
              projectName={ANIMEX.getName}
              projectDescription={ANIMEX.getDescription}
              projectLive={ANIMEX.getLive}
              projectCode={ANIMEX.getCode}
            />
            <CurrentProject
              projectID={ONLYJOJO.getId}
              projectCover={ONLYJOJO.getBg}
              projectName={ONLYJOJO.getName}
              projectDescription={ONLYJOJO.getDescription}
              projectLive={ONLYJOJO.getLive}
              projectCode={ONLYJOJO.getCode}
            />
            {/*
            <CurrentProject
              projectID={GRAPEVINES.getId}
              projectCover={GRAPEVINES.getBg}
              projectName={GRAPEVINES.getName}
              projectDescription={GRAPEVINES.getDescription}
              projectLive={GRAPEVINES.getLive}
              projectCode={GRAPEVINES.getCode}
            />
            */}
            <CurrentProject
              projectID={WORKOUTAPP.getId}
              projectCover={WORKOUTAPP.getBg}
              projectName={WORKOUTAPP.getName}
              projectDescription={WORKOUTAPP.getDescription}
              projectLive={WORKOUTAPP.getLive}
              projectCode={WORKOUTAPP.getCode}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
