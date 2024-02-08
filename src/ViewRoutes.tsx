import {createBrowserRouter} from "react-router-dom"
import HomePage from "./features/HomePage";
import React from "react";
const viewRoutes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

export default viewRoutes