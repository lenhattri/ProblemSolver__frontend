import {createBrowserRouter} from "react-router-dom"
import HomePage from "./features/HomePage";

const viewRoutes = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

export default viewRoutes