import { Navigate, RouteObject } from "react-router-dom";
import DashboardLayout from './layouts/DashboardLayout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />
  },
  { path: "auth", element: <Auth /> },
  { path: "*", element: <NotFound /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
    ],
  },
]

export default routes
