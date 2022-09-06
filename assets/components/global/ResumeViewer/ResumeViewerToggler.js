// Next/React Imports
import { useEffect } from "react";

// Component Imports

// Function/Image/Data Imports
import OpenResumeViewer from "../../../functions/dom/manip/openers/OpenResumeViewer";

// Library Imports
import { FaFileDownload } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";

// Styles
import styles from "../../../styles/modules/Nav/Nav.module.css";

export const ResumeViewerToggler = (props) => {
  // Determine if to add cursor-hover class
  useEffect(() => {
    const TOGGLER = document.getElementById("resumeViewerToggler");

    if (props.determineCH == "true") {
      TOGGLER.classList.add("cursor-hover");
    }

    if (!props.determineCH == "true") {
      if (TOGGLER.classList.contains("cursor-hover")) {
        TOGGLER.classList.remove("cursor-hover");
      } else {
        TOGGLER.classList.remove("cursor-hover");
      }
    }
  }, []);

  return (
    <button
      id="resumeViewerToggler"
      className={`${styles.resume_viewer_toggler} half-second`}
      onClick={() => {
        OpenResumeViewer();
      }}
    >
      <AiFillFilePdf className={styles.icon} />
      <FaFileDownload className={styles.icon} />

      <span>RESUME</span>
    </button>
  );
};
