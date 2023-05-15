import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayOut from "../layouts/LoginLayOut";
import Main from "../layouts/Main";
import NewsLayOut from "../layouts/NewsLayOut";
import Category from "../pages/Home/Category/Category";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News/News";
import Terms from "../pages/Shared/Terms/Terms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([

    {
        path: '/',
        element: <LoginLayOut></LoginLayOut>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'terms',
                element: <Terms></Terms>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-bdahsan1999wd.vercel.app/categories/${params.id}`)

            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayOut></NewsLayOut>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-bdahsan1999wd.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;