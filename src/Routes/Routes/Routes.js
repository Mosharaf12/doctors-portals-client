import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import Appointment from "../../pages/Appointment/Appointment";
import AddDoctors from "../../pages/DashBoard/AddDoctors/AddDoctors";
import AllUsers from "../../pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../pages/DashBoard/DashBoard/DashBoard";
import ManageDoctors from "../../pages/DashBoard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../pages/DashBoard/MyAppointment/MyAppointment";
import Payment from "../../pages/DashBoard/Payment/Payment";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
                
            }

        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:'/dashboard/adddoctor',
                element: <AdminRoute><AddDoctors></AddDoctors></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`),
                element: <AdminRoute><Payment></Payment></AdminRoute>
            },
        ]
    }
])