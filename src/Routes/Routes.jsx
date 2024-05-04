import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menus/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/menu',
          element:<Menu></Menu>,
          loader: () => fetch('http://localhost:5000/api/v1/foodsCount')
        }
    ]
  },
]);

export default router;
