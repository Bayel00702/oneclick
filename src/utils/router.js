import {useRoutes} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Room from "../pages/Room/Room";
import Catalog from "../pages/Catalog/Catalog";
import Product from "../pages/Product/Product";


export default function Router () {
    const routes = useRoutes([
        {
            path: "",
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: '/room',
                    element: <Room/>
                },
                {
                    path: '/catalog',
                    element: <Catalog/>
                },

                {
                    path: '/product/:id',
                    element: <Product/>
                }
            ]
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: '/login',
            element: <Login/>
        }
    ]);
    return routes
}