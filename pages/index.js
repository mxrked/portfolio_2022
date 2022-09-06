// Next/React Imports
import { useEffect } from "react";

// Component Imports
import { HeadCnt } from "../assets/components/global/HeadCnt";
import { DesktopNav_PARENT } from "../assets/components/global/Nav/desktop/DesktopNav_PARENT";
import { MobileNavMenu } from "../assets/components/global/Nav/mobile/MobileNavMenu";
import { MobileNav_PARENT } from "../assets/components/global/Nav/mobile/MobileNav_PARENT";
import { ResumeViewer_PARENT } from "../assets/components/global/ResumeViewer/ResumeViewer_PARENT";
import { BackToTop } from "../assets/components/global/BackToTop/BackToTop";

import { Cursor } from "../assets/components/global/Cursor/Cursor";

import { Top } from "../assets/components/pages/Index/Top";
import { CurrentProjects } from "../assets/components/pages/Index/CurrentProjects";
import { AboutAndContact } from "../assets/components/pages/Index/AboutAndContact";

import { Footer_PARENT } from "../assets/components/global/Footer/Footer_PARENT";

// Function/Image/Data Imports
import {
  CheckingPageAndDisablingLink_NavsAndFooter,
  CheckingPageAndDisablingLink_Single,
} from "../assets/functions/dom/checkers/CheckPageAndDisableLinksToIt";

// Library Imports

// Styles
import "../assets/styles/modules/Index/Index.module.css";

export default function Home() {
  // Link Disabling
  useEffect(() => {
    CheckingPageAndDisablingLink_Single(
      document.querySelector("#desktopNav #navLogo")
    );
    CheckingPageAndDisablingLink_Single(
      document.querySelector("#mobileNav #navLogo")
    );
    CheckingPageAndDisablingLink_Single(
      document.querySelector("#footerParent #footerLogo")
    );
    CheckingPageAndDisablingLink_NavsAndFooter(0, 0, 0);
  }, []);

  return (
    <div id="PAGE" className="overrides_INDEX">
      {/* Global Components */}
      <HeadCnt
        title="Parker Phelps - A Front End Developer"
        description="Parker Phelps is a determined and inspired Front End web developer with a fiery passion to code and create web apps from scratch with the knowledge he has gained during his 4+ year journey."
        keywords="Front End Web Developer, Web Developer, Front End, Front-End, HTML5, HTML, CSS3, CSS, SaSS, JavaScript, BootStrap, ReactJS, React.js, NextJS, Next.js, Java, Php, Portfolio, Web Developer Portfolio, Web Portfolio"
        robots="index, follow"
        url="http://basicallyeasy.com/next-projects/portfolio"
      />

      <DesktopNav_PARENT linkProps={0} />
      <MobileNav_PARENT />
      <MobileNavMenu linkProps={0} />
      <ResumeViewer_PARENT />
      <BackToTop />

      <Cursor />

      <main id="PAGE_CNT">
        <Top />
        <CurrentProjects />
        <AboutAndContact />
        <Footer_PARENT />
      </main>
    </div>
  );
}
