// import { Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Tables from './pages/Tables';
import Billing from './pages/Billing';
import Rtl from './pages/Rtl';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Main from './components/layout/Main';

const routers = createBrowserRouter([
  { path: '/sign-up', Component: SignUp },
  { path: '/sign-in', Component: SignIn },
  {
    path: '/dashboard/*',
    Component: Main,
    children: [
      { path: 'home', Component: Home },
      { path: 'tables', Component: Tables },
      { path: 'billing', Component: Billing },
      { path: 'rtl', Component: Rtl },
      { path: 'profile', Component: Profile },
    ],
  },
  // { path: '*', Component: Root },
]);

export default function Router() {
  return <RouterProvider router={routers} />;
}
