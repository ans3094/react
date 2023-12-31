import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Todo from './todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo/>,
  },
]);
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
