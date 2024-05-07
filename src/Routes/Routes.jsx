import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menus/Menu";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";
import FoodItemDetails from "../Pages/FoodItemDetails";
import Order from "../Pages/Order/Order";
import AddItem from "../Pages/AddItem";
import MyItems from "../Pages/MyItems";
import MyOrders from "../Pages/MyOrders";
import UpdateData from "../Pages/UpdateData";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
        loader: () => fetch("http://localhost:5000/api/v1/foodsCount"),
      },
      {
        path: "/food-details/:id",
        element: <FoodItemDetails></FoodItemDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/allfoods/${params.id}`),
      },
      {
        path: "/order/:id",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/allfoods/${params.id}`),
      },
      {
        path: "/additem",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/myitems",
        element: (
          <PrivateRoute>
            <MyItems></MyItems>,
          </PrivateRoute>
        ),
      },
      {
        path: "/myorders",
        element: (
          <PrivateRoute>
            <MyOrders></MyOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-data/:id",
        element: (
          <PrivateRoute>
            <UpdateData></UpdateData>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/addeditem/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
