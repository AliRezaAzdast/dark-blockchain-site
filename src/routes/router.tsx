import type { RouteObject } from "react-router";
import Home from '../pages/Home'
import Blog from '../pages/Blog'


const routes: RouteObject[] = [
    {path:'/', element:<Home/>},
    {path:'/blog', element:<Blog/>},
    { path: "/blog/:slug", element: '' },
]

export default routes