import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayOut from "../layouts/NewsLayOut";
import News from "../pages/News/News/News";

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
                path: '/category/:id',
                element: <Category></Category>
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayOut></NewsLayOut>,
        children: [
            {
                path: ':id',
                element: <News></News>
            }
        ]
    }
])

export default router;