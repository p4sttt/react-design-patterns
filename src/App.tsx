import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import { Home } from '@/pages';
import { Layout } from '@/shared/Layout';
import { routes } from '@/utils/constants';

const router = createBrowserRouter([
  {
    path: routes.root,
    element: <Layout />,
    children: [
      {
        path: routes.home,
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
