import {createBrowserRouter} from 'react-router-dom'
import Main from "../Components/Layouts/Main/Main";
import Blogs from '../Components/Pages/Blogs/Blogs';
import Checkout from '../Components/Pages/Checkout/Checkout';
import CourseDetails from '../Components/Pages/CourseDetails/CourseDetails';
import Courses from '../Components/Pages/Courses/Courses';
import ErrorPage from '../Components/Pages/ErrorPage/ErrorPage';
import FAQ from '../Components/Pages/FAQ/FAQ';
import Home from '../Components/Pages/Home/Home';
import LogIn from '../Components/Pages/LogIn/LogIn';
import Register from '../Components/Pages/Register/Register';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: async () => fetch('https://courses-server-side.vercel.app/courses'),
                element: <Courses></Courses>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path:'/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            },
            {
                path: '/course-details',
                element: <CourseDetails></CourseDetails>
            }
        ]
    }
])