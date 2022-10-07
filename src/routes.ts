import { Navigate } from "react-router-dom";

// Layout Types
// import { DefaultLayout } from "./layouts";
import Dashboard from "./pages/Dashboard";

// Route Views
// import BlogOverview from "./views/BlogOverview";

interface N {
  path: string,
  exact?: boolean,
  component: string
}

export const routes = [
  {
    path: '/dashboard',
    // layout: DefaultLayout,
    component: Dashboard
  },
  // {
  //   path: "/overview",
  //   layout: DefaultLayout,
  //   component: BlogOverview,
  // },
  // {
  //   path: "/players",
  //   layout: DefaultLayout,
  //   component: UserProfileLite,
  // },
  // {
  //   path: "/challenges",
  //   layout: DefaultLayout,
  //   component: AddNewPost,
  // },
  // {
  //   path: "/subscriptions",
  //   layout: DefaultLayout,
  //   component: Errors,
  // },
  // {
  //   path: "/profile",
  //   layout: DefaultLayout,
  //   component: ComponentsOverview,
  // },
];
