// Next/React Imports

// Component Imports
import { HeadCnt } from "../assets/components/global/HeadCnt";

import { ErrorCnt } from "../assets/components/pages/Error/ErrorCnt";

// Function/Image/Data Imports

// Library Imports

// Styles
import "../assets/styles/modules/Error/Error.module.css";

export default function FiveOhOh() {
  return (
    <div id="PAGE" className="overrides_INDEX">
      {/* Global Components */}
      <HeadCnt
        title="Parker Phelps - 500"
        description="n/a"
        keywords="n/a"
        robots="noindex, nofollow"
        url="http://basicallyeasy.com/next-projects/portfolio/500"
      />

      <main id="PAGE_CNT">
        <ErrorCnt
          errorCode="500"
          errorDescription="The page that you requested ran into an unexpected condition and prevented your request from being met. You can go back home with the link below."
        />
      </main>
    </div>
  );
}
