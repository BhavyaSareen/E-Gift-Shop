import { Outlet } from "react-router-dom";
import UserFooter from "./UserFooter";
import UserHeader from "./UserHeader";

export default function UserMaster(){
    return(
        <>
            <UserHeader/>
            <Outlet/>
            <UserFooter/>
        </>
    )
}