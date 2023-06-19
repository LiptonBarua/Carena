import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog/Blog";

const router=createBrowserRouter([
{
    path: '/', element: <Main></Main>, children: [
        {
            path: '/', element: <Home></Home>
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