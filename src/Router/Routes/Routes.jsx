import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog/Blog";
import Categorys from "../../Pages/Category/Categorys";

const router=createBrowserRouter([
{
    path: '/', element: <Main></Main>, children: [
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/category/:brand', 
         
            element: <Categorys></Categorys>,
            loader: ({params})=>fetch(`https://server12.vercel.app/product/${params.brand}`)
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
}
])

export default router;