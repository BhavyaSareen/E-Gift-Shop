import { Navigate, Outlet } from "react-router-dom";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import { ToastContainer } from "react-toastify";

export default function AdminMaster(){
    const authenticate=sessionStorage.getItem("authenticate")
    if(!authenticate){
        sessionStorage.setItem("message", "Please Login!!")
        return <Navigate replace to="/adminlogin"/>
    }
    return(
        <>
            <AdminHeader/>
            <Outlet/>
            <AdminFooter/>
            <ToastContainer/>
        </>
    )
}