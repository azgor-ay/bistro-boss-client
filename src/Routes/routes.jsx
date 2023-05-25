import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import OurMenuPage from "../Pages/OurMenuPage";
import OrderFood from "../Pages/OrderFood";
import LoginPage from "../Pages/LoginPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <HomePage></HomePage>
        },
        {
          path: "/menu",
          element: <OurMenuPage></OurMenuPage>
        },
        {
          path: "/orderFoods/:category",
          element: <OrderFood></OrderFood>
        }
      ]
    },
    {
      path: "/login",
      element: <LoginPage></LoginPage>
    }
  ]);

  export default router;