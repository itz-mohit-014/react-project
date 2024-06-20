import UserContext from "../utilits/UserContext";
import { useContext } from "react";

const Footer = () => {
    const {userData, setUserInfo} = useContext(UserContext);

    console.log(userData, setUserInfo)
    
    return (
        <footer className="bg-slate-900 h-20 text-white flex items-center justify-center text-xl">copyright @foodcollection 2024 | { userData.name } </footer>
    )
}

export default Footer;