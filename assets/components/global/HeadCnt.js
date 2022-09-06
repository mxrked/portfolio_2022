// React/Next Imports
import Head from "next/head";

// Library Imports

// Data/Functions/Images Imports

import { ATI, F32, F16, FAVICON } from "../../images/TAB_ICONS";

// Component Imports

// Style Imports

export const HeadCnt = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta name="keywords" content={props.keywords} />
      <meta name="robots" content={props.robots} />

      <meta property="og:title" content={props.title} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:url" content={props.url} />

      <link rel="canonical" href={props.url} />

      <link rel="shortcut icon" href={FAVICON} />
      <link rel="apple-touch-icon" sizes="180x180" href={ATI} />
      <link rel="icon" type="image/png" sizes="32x32" href={F32} />
      <link rel="icon" type="image/png" sizes="16x16" href={F16} />
    </Head>
  );
};
