import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilits/useOnlineStatus";
import UserContext from "../utilits/UserContext";


const Header = () => {
  const [signUpBtn, setSignUpBtn] = useState("Login");
  const {userData , setUserData} = useContext(UserContext)


  return (
    <header className="Header px-4 py-1 flex justify-between items-center gap-4 w-full border-solid border-blue-500 border-2 rounded">
      <div id="logo" className=" w-28 rounded-full border-4 border-solid overflow-hidden border-purple-400">
        <img className="scale-125"
          src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
          alt="Official Logo"
        />
      </div>

      <nav className="flex gap-4 items-center">
        <ul className="flex items-center justify-center gap-4 p-3">
          <li className="hover:border-2 hover:cursor-default border-slate-900 px-4 py-2 rounded ">Online: {useOnlineStatus() ? "✅" : "🔴"}</li>
          <li className="hover:underline hover:cursor-pointer hover:scale-125 underline-offset-8 transition">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:underline hover:scale-125 underline-offset-8 transition">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="hover:underline hover:scale-125 underline-offset-8 transition">
            <Link to="/about">About</Link>
          </li>
          
          <li className="hover:underline hover:scale-125 underline-offset-8 transition">
            <Link to="#">{userData.name} | </Link> 
            <Link to="#">{userData.eMail}</Link>
          </li>
        </ul>
        <button
          id="login-btn"
          className="bg-slate-900 px-8 py-2 rounded-lg text-white text-lg hover:bg-slate-700 transition"
          onClick={() => {
            
            userData.name === "Mohit" ?
            setUserData({name:'Salman'}) :
            setUserData({name:'Mohit'})

            signUpBtn == "Login"
              ? setSignUpBtn("Signup")
              : setSignUpBtn("Login");
          }}
        >
          {" "}
          {signUpBtn}
        </button>
      </nav>
    </header>
  );
};

export default Header;
