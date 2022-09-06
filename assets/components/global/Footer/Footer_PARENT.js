// Next/React Imports
import { useRouter } from "next/router";
import { useEffect } from "react";

// Component Imports

// Function/Image/Data Imports
import PageRouting from "../../../functions/routing/PageRouting";

// Library Imports
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaAt,
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

// Styles
import styles from "../../../styles/modules/Footer/Footer.module.css";

export const Footer_PARENT = () => {
  const router = useRouter();

  // Checkers
  let indexRouted = false;
  let projectsRouted = false;
  let infoRouted = false;
  let contactRouted = false;

  return (
    <footer id="footerParent" className={`${styles.footer_parent} global-blur`}>
      <div className={`${styles.footer_parent_box} container-fluid`}>
        <div className={`${styles.footer_parent_row} row`}>
          <div
            className={`${styles.footer_parent_side} ${styles.footer_parent_L} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
          >
            <div className={styles.footer_parent_side_cnt}>
              <div className={styles.footer_logo_holder}>
                <div
                  className={`${styles.footer_logo} cursor-hover`}
                  id="footerLogo"
                  onClick={() => {
                    PageRouting(router, "/", "/portfolio/", indexRouted);
                  }}
                >
                  <IoIosArrowBack className={`${styles.icon} half-second`} />

                  <span className="half-second" />

                  <IoIosArrowForward className={`${styles.icon} half-second`} />
                </div>
              </div>

              <div className={styles.footer_socials_holder}>
                <ul>
                  <li>
                    <a
                      href="https://twitter.com/Parker101P"
                      target={"_blank"}
                      className="half-second cursor-hover"
                    >
                      <FaTwitter className={styles.icon} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/parker-phelps-a121501b6/"
                      target={"_blank"}
                      className="half-second cursor-hover"
                    >
                      <FaLinkedin className={styles.icon} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.com/users/145558510002765824"
                      target={"_blank"}
                      className="half-second cursor-hover"
                    >
                      <FaDiscord className={styles.icon} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/mxrked"
                      target={"_blank"}
                      className="half-second cursor-hover"
                    >
                      <FaGithub className={styles.icon} />
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.footer_contact_holder}>
                <div className={`${styles.footer_contact_link} half-second`}>
                  <FaPhoneAlt className={styles.icon} />

                  <span>+1 (336) 831 3432</span>
                </div>
                <br />
                <div className={`${styles.footer_contact_link} half-second`}>
                  <FaAt className={styles.icon} />

                  <span>pp101socials@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${styles.footer_parent_side} ${styles.footer_parent_R} col-lg-6 col-md-6 col-sm-12 col-xs-12`}
          >
            <div className={styles.footer_parent_side_cnt}>
              <div className={styles.footer_links_holder}>
                <ul>
                  <li
                    className="footer-link half-second cursor-hover"
                    onClick={() => {
                      PageRouting(router, "/", "/portfolio/", indexRouted);
                    }}
                  >
                    <span>Home</span>
                  </li>
                  <br />
                  <li
                    className="footer-link half-second cursor-hover"
                    onClick={() => {
                      PageRouting(
                        router,
                        "/info/",
                        "/portfolio/info/",
                        infoRouted
                      );
                    }}
                  >
                    <span>About</span>
                  </li>
                  <br />
                  <li
                    className="footer-link half-second cursor-hover"
                    onClick={() => {
                      PageRouting(
                        router,
                        "/projects/",
                        "/portfolio/projects/",
                        projectsRouted
                      );
                    }}
                  >
                    <span>Projects</span>
                  </li>
                  <br />
                  <li
                    className="footer-link half-second cursor-hover"
                    onClick={() => {
                      PageRouting(
                        router,
                        "/contact/",
                        "/portfolio/contact/",
                        contactRouted
                      );
                    }}
                  >
                    <span>Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
