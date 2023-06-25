import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Login from "../Login/Login";
import Register from "../../Register/Register";
import Category from "../Category/Category";
import Body from "../Body/Body";
import ChefDetailsCard from "../Home/ChefDetailsCard/ChefDetailsCard";
import ErrorPage from "../ErrorPage";
import PrivateRout from "./PrivateRout";
import NotFound from "../NotFound";




const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            errorElement:<ErrorPage/>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path:'*',
                    element:<NotFound></NotFound>
                }

            ]
        },
        {
            path: '/',
            element: <Body></Body>,

            children: [
                {
                    path: '/blog',
                    element: <Blog></Blog>
                }
                , {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path:'*',
                    element:<NotFound></NotFound>
                }
            ]
        }, {
            path: '/chefDetails',
            element: <Category></Category>,
            children: [
                {
                    path: '/chefDetails/:id',
                    element: <PrivateRout><ChefDetailsCard></ChefDetailsCard></PrivateRout>,
                    loader:({params})=>fetch(`https://server-site-xi.vercel.app/chef_details/${params.id}`)
                }]
        }
    ]
)

export default router;