import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ClientsList from './pages/ClientsList/ClientsList.jsx';
import ClientDetail from './pages/ClientDetail/ClientDetail.jsx';
import CreateClient from './pages/CreateClient/CreateClient.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "customers",
        element: <ClientsList />,
      },
      {
        path: "customers/:id",
        element: <ClientDetail 
          
        />,
      },
      {
        path: "customers/create",
        element: <CreateClient />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
