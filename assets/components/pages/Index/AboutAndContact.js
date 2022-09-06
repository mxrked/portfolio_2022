// Next/React Imports
import { useRouter } from "next/router";

// Component Imports

// Function/Image/Data Imports
import PageRouting from "../../../functions/routing/PageRouting";

// Library Imports

// Styles
import styles from "../../../styles/modules/Index/Index.module.css";

export const AboutAndContact = () => {
  const router = useRouter();

  // Checkers
  let infoRouted = false;
  let contactRouted = false;

  return (
    <section
      id="indexAboutAndContact"
      className={`${styles.index_about_and_contact} global-blur`}
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      <div
        className={`${styles.index_about_and_contact_inner} exit-element half-second`}
      >
        <h1>
          About<span>/</span>Contact.
        </h1>

        <p>
          Learn and understand the background behind Parker and the reasons why
          he became a Front End Web Developer as his current passion. You can
          also contact or request to hire him in different ways.
        </p>

        <div className={`${styles.index_about_and_contact_inner_links}`}>
          <div
            className={`${styles.index_about_and_contact_inner_link} cursor-hover`}
            onClick={() => {
              PageRouting(router, "/info/", "/portfolio/info/", infoRouted);
            }}
          >
            <div className="half-second" />

            <span className="half-second">About Me</span>
          </div>

          <div
            className={`${styles.index_about_and_contact_inner_link} cursor-hover`}
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

            <span className="half-second">Contact Me</span>
          </div>
        </div>
      </div>
    </section>
  );
};
