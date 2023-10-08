import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/Service/ServiceDetails";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Shop from "../Pages/Shop/Shop";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/weddingServices.json')
            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/shop',
                element: <Shop></Shop>,
                loader: () => fetch('/shop.json')

            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/weddingServices.json')
            }
        ]
    },
]);