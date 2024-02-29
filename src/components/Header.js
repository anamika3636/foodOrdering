import { useContext, useEffect, useState } from "react";
import { Logo_url } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btn, setbtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)
  const cartItems = useSelector((store) => store.cart.items);
  // subscribing to the store
  useEffect(() => {
    console.log("use effect");
  }, [btn]);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 mb-2">
      <div className="logo-container">
        <img className="w-40 h-25" src={Logo_url}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status {onlineStatus ? "✔" : "🚩"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4"><Link to="/cart">Cart ({cartItems.length} items) </Link></li>
          <button
            className="login-btn"
            onClick={() => {
              btn === "login" ? setbtn("logout") : setbtn("login");
            }}
          >
            {btn}
          </button>
          <li className="m-1">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
