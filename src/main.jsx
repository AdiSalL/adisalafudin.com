import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [{ index: true, element: <App /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
