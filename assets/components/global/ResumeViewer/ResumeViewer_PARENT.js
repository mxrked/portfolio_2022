// Next/React Imports
import { useEffect } from "react";

// Component Imports

// Function/Image/Data Imports
import { RESUME_DOC, RESUME_PDF } from "../../../images/RESUME";
import CloseResumeViewer from "../../../functions/dom/manip/closers/CloseResumeViewer";
import CheckResumeViewerInnerWidth from "../../../functions/dom/checkers/CheckResumeViewerInnerWidth";

// Library Imports
import { FaFileDownload } from "react-icons/fa";
import { AiFillFilePdf } from "react-icons/ai";

// Styles
import styles from "../../../styles/modules/Nav/Nav.module.css";

export const ResumeViewer_PARENT = () => {
  // Determine if to add cursor-hover class
  useEffect(() => {
    window.addEventListener("resize", () => {
      CheckResumeViewerInnerWidth();
    });

    window.addEventListener("load", () => {
      CheckResumeViewerInnerWidth();
    });
  }, []);

  return (
    <div id="resumeViewer" className={`${styles.resume_viewer} full-second`}>
      <div id="resumeViewerBG" className={`${styles.resume_viewer_bg}`} />

      <div
        id="resumeViewerCnt"
        className={`${styles.resume_viewer_cnt} half-second`}
      >
        <div className={`${styles.resume_viewer_cnt_closer_holder}`}>
          <button
            id="resumeViewerCloser"
            className="half-second"
            onClick={() => {
              CloseResumeViewer();
            }}
          >
            <span className="half-second" />
            <span className="half-second" />
          </button>
        </div>

        <h2>How would you like to view my resume?</h2>

        <div className={styles.resume_viewer_cnt_links_holder}>
          <div className="resume-link half-second">
            <a href={RESUME_DOC} download />

            <FaFileDownload className={styles.icon} />

            <span>Download</span>
          </div>

          <div className="resume-link half-second">
            <a href={RESUME_PDF} target={"_blank"} />

            <AiFillFilePdf className={styles.icon} />

            <span>PDF</span>
          </div>
        </div>
      </div>
    </div>
  );
};
