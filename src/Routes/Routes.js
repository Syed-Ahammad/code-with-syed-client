import {createBrowserRouter} from 'react-router-dom'
import Main from "../Components/Layouts/Main/Main";
import About from '../Components/Pages/About/About';
import Blogs from '../Components/Pages/Blogs/Blogs';
import Courses from '../Components/Pages/Courses/Courses';
import FAQ from '../Components/Pages/FAQ/FAQ';
import Home from '../Components/Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/about',
                element: <About></About>
            }
        ]
    }
])