import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { Monuments } from './pages/Monuments';
import { AboutProject } from './pages/AboutProject';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './global.css';
import { Outlet } from 'react-router-dom';
import { Game } from './pages/Game'
export const App = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'monuments',
        element: <Monuments />,
      },
      {
        path: 'game',
        element: <Game />,
      },
      {
        path: 'aboutproject',
        element: <AboutProject />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
