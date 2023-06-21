import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog/Blog";
import Categorys from "../../Pages/Category/Categorys";
import DefaultPage from "../../Pages/DefaultPage/DefaultPage";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import SellerRouter from "../SellerRouter/SellerRouter";
import Payment from "../../Dashboard/Payment/Payment";
import AdminRouter from "../AdminRouter/AdminRouter";
import AllUser from "../../Dashboard/AllUser/AllUser";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import BookingCollection from "../../Dashboard/BookingCollection/BookingCollection";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import MyProfile from "../../Dashboard/MyProfile/MyProfile";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <DefaultPage></DefaultPage>,
        element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/category/:brand',

                element: <PrivateRouter><Categorys></Categorys></PrivateRouter>,
                loader: ({ params }) => fetch(` https://resele-server-side.vercel.app/product/${params.brand}`)
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/signUp', element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        errorElement: <DefaultPage></DefaultPage>,
        element: <DashboardLayout></DashboardLayout>, children: [
            {
                path: '/dashboard', element: <PrivateRouter><BookingCollection></BookingCollection></PrivateRouter>
            },
            {
                path: '/dashboard/myProfile', element: <PrivateRouter><MyProfile></MyProfile></PrivateRouter>
            },
            {
                path: '/dashboard/myProducts', element: <SellerRouter><MyProducts></MyProducts></SellerRouter>
             },
            {
                path: '/dashboard/addProduct', element: <SellerRouter><AddProduct></AddProduct></SellerRouter>
            },
            {
                path: '/dashboard/allUser', index:true, element: <PrivateRouter><AdminRouter><AllUser></AllUser></AdminRouter></PrivateRouter>
            },
            {
                path: '/dashboard/payments/:id', 
                element: <Payment></Payment>,
                loader: ({params})=>fetch(` https://resele-server-side.vercel.app/booking/${params.id}`)
            }
        ]
    }
])

export default router;