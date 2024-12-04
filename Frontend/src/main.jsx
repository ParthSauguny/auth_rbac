import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './Components/Layout';
import Signup from './Components/Signup';
import Login from './Components/Login';
import AddBook from './Components/AddBook';
import GetBooks from './Components/GetBooks';
import {ToastContainer} from 'react-toastify'
import Home from './Components/Home';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='/user/signup' element={<Signup/>}/>
            <Route path='/user/login' element={<Login/>}/>
            <Route path='/book/addbook' element={<AddBook/>}/>
            <Route path='/book/getbooks' element={<GetBooks/>}/>
        </Route>
    )
  )

createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router = {router}/>
        <ToastContainer/>
    </>
);