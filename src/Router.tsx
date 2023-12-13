import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { AppLayout } from './widgets/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '*',
    element: '404: page not found',
  },
]);

console.log(router.routes);

export function Router() {
  return <RouterProvider router={router} />;
}
