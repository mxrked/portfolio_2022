// Next/React Imports

// Component Imports
import { HeadCnt } from "../assets/components/global/HeadCnt";

import { ErrorCnt } from "../assets/components/pages/Error/ErrorCnt";

// Function/Image/Data Imports

// Library Imports

// Styles
import "../assets/styles/modules/Error/Error.module.css";

export default function FourOhThree() {
  return (
    <div id="PAGE" className="overrides_INDEX">
      {/* Global Components */}
      <HeadCnt
        title="Parker Phelps - 403"
        description="n/a"
        keywords="n/a"
        robots="noindex, nofollow"
        url="http://basicallyeasy.com/next-projects/portfolio/403"
      />

      <main id="PAGE_CNT">
        <ErrorCnt
          errorCode="403"
          errorDescription="The page that you requested has denied your access to it. You can go back home with the link below."
        />
      </main>
    </div>
  );
}
