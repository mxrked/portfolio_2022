// Next/React Imports
import { useEffect } from "react";

// Component Imports
import { HeadCnt } from "../assets/components/global/HeadCnt";
import { DesktopNav_PARENT } from "../assets/components/global/Nav/desktop/DesktopNav_PARENT";
import { MobileNav_PARENT } from "../assets/components/global/Nav/mobile/MobileNav_PARENT";
import { MobileNavMenu } from "../assets/components/global/Nav/mobile/MobileNavMenu";
import { ResumeViewer_PARENT } from "../assets/components/global/ResumeViewer/ResumeViewer_PARENT";

import { Footer_PARENT } from "../assets/components/global/Footer/Footer_PARENT";

import { BackToTop } from "../assets/components/global/BackToTop/BackToTop";

import { Cursor } from "../assets/components/global/Cursor/Cursor";

// Function/Image/Data Imports
import { CheckingPageAndDisablingLink_NavsAndFooter } from "../assets/functions/dom/checkers/CheckPageAndDisableLinksToIt";

// Library Imports

// Styles
import "../assets/styles/modules/Contact/Contact.module.css";

export default function Contact() {
  // Link Disabling
  useEffect(() => {
    CheckingPageAndDisablingLink_NavsAndFooter(3, 3, 3);
  }, []);

  return (
    <div id="PAGE" className="overrides_CONTACT">
      {/* Global Components */}
      <HeadCnt
        title="Parker Phelps - Contact or Hire"
        description="Parker Phelps is always looking to get a project started and finished to it's completion regardless of the task and the challenge of it."
        keywords="Front End Web Developer, Web Developer, Front End, Front-End, HTML5, HTML, CSS3, CSS, SaSS, JavaScript, BootStrap, ReactJS, React.js, NextJS, Next.js, Java, Php, Portfolio, Web Developer Portfolio, Web Portfolio"
        robots="index, follow"
        url="http://basicallyeasy.com/next-projects/portfolio/contact"
      />

      <DesktopNav_PARENT linkProps={3} />
      <MobileNav_PARENT />
      <MobileNavMenu linkProps={3} />
      <ResumeViewer_PARENT />
      <BackToTop />

      <Cursor />

      <main id="PAGE_CNT">
        <Footer_PARENT />
      </main>
    </div>
  );
}
