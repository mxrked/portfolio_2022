// Function/Image/Data Imports
import PROJECT from "../classes/PROJECT";

import {
  AFRESHPLACE_COVER,
  ANIMEX_COVER,
  GRAPEVINES_COVER,
  ONLYJOJO_COVER,
  WORKOUTAPP_COVER,
} from "../images/PROJECT_COVERS";

const AFRESHPLACE = new PROJECT(
  1,
  "A Fresh Place",
  "This ecommerce-based website is dedicated to fresh produce and other foods.",
  AFRESHPLACE_COVER,
  "http://basicallyeasy.com/next-projects/afreshplace/",
  "https://github.com/mxrked/AFreshPlace"
);

const ANIMEX = new PROJECT(
  2,
  "Animex",
  "This ecommerce-based website is dedicated to anime and manga.",
  ANIMEX_COVER,
  "http://basicallyeasy.com/next-projects/animex/",
  "https://github.com/mxrked/animex"
);

const GRAPEVINES = new PROJECT(
  3,
  "Grapevines",
  "This ecommerce-based website is dedicated to different types of wines.",
  GRAPEVINES_COVER,
  "http://www.basicallyeasy.com/react-projects/grapevines/#/",
  "https://github.com/mxrked/GrapeVines"
);

const ONLYJOJO = new PROJECT(
  4,
  "OnlyJojo",
  "This ecommerce-based website is dedicated to JoJos Bizarre Adventure.",
  ONLYJOJO_COVER,
  "http://basicallyeasy.com/next-projects/onlyjojo/",
  "https://github.com/mxrked/OnlyJojo"
);

const WORKOUTAPP = new PROJECT(
  5,
  "Workout App",
  "This web app will allow the user to create a workout routine and have it emailed.",
  WORKOUTAPP_COVER,
  "http://basicallyeasy.com/next-projects/workoutapp/",
  "https://github.com/mxrked/WorkoutProgram"
);

export { AFRESHPLACE, ANIMEX, GRAPEVINES, ONLYJOJO, WORKOUTAPP };
