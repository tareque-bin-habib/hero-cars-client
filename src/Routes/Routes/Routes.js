import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main"
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import DashBoard from "../../Pages/DashBoard/DashBoard/DashBoard";
import MyBooking from "../../Pages/DashBoard/MyBooking/MyBooking";
import Categorie from "../../Pages/Home/Categories/Categorie";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                path: '/catergorie/:brand',
                element: <Categorie></Categorie>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyBooking></MyBooking>
            }
        ]
    }
])

export default router;

