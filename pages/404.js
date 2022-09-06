// Next/React Imports

// Component Imports
import { HeadCnt } from "../assets/components/global/HeadCnt";

import { ErrorCnt } from "../assets/components/pages/Error/ErrorCnt";

// Function/Image/Data Imports

// Library Imports

// Styles
import "../assets/styles/modules/Error/Error.module.css";

export default function FourOhFour() {
  return (
    <div id="PAGE" className="overrides_INDEX">
      {/* Global Components */}
      <HeadCnt
        title="Parker Phelps - 404"
        description="n/a"
        keywords="n/a"
        robots="noindex, nofollow"
        url="http://basicallyeasy.com/next-projects/portfolio/404"
      />

      <main id="PAGE_CNT">
        <ErrorCnt
          errorCode="404"
          errorDescription="The page that you requested does not exsist. You can go back home with the link below."
        />
      </main>
    </div>
  );
}
