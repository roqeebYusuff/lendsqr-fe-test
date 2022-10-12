import { Navigate } from "react-router-dom";
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from "./layouts/MainLayout";
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import GeneralDetails from "./pages/users/GeneralDetails";


const routes = (isLoggedIn: boolean) => [
  { path: "*", element: <NotFound /> },
  {
    path: '/',
    element: !isLoggedIn ? <MainLayout /> : <Navigate to="/users" />,
    children: [
      {
        path: 'auth',
        element: <Auth />
      },
      { path: '/', element: <Navigate to="/auth" /> },
    ]
  },
  {
    path: 'users',
    element: isLoggedIn ? <DashboardLayout /> : <Navigate to='/auth' />,
    children: [
      {
        path: 'details',
        element: <GeneralDetails />
      },
      { path: '', element: <Dashboard /> },
    ],
  },
]

export default routes
