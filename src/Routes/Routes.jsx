import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import ServiceDetails from "../Pages/Home/Service/ServiceDetails";
import Login from "../Pages/Home/Login/Login";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: () => fetch('/weddingServices.json')
            }
        ]
    },
]);