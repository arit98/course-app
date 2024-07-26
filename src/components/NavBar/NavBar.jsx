import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import userAvatar from "../../assets/avatar.png"
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import Logo from "../../assets/logo.png"

const NavBar = ({ scrollHandler, onSignInClick, onSignUpClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleAvatarClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="fixed w-full z-[50] overflow-y-scroll">
      <div className="flex items-center justify-between w-full h-[90px] bg-white">
        <div className="flex gap-[1rem] md:pl-[4rem] pl-4">
          <div className="md:w-24 w-20 md:h-24 h-20 mt-8">
          <img src={Logo} alt="" />
          </div>
        </div>
        <div className="flex gap-[1rem] items-center md:pr-[4rem] pr-4">
          {isLoggedIn ? (
            <div className="relative">
            <img
              src={userAvatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={handleAvatarClick}
            />
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                <div
                  onClick={()=>setIsLoggedIn(false) || localStorage.clear() || toast.success("Logout Successfully")}
                  className="px-4 py-2 text-gray-700 cursor-pointer hover:rounded-lg hover:transition-all hover:text-gray-200 hover:bg-gradient-to-b hover:from-[#B73BBE] hover:to-[#992E9D]"
                >
                  Logout
                </div>
              </div>
            )}
          </div>
          ) : (
            <>
              <div onClick={onSignInClick} className="text-[#aa36af] cursor-pointer">Login</div>
              <div onClick={onSignUpClick} className="bg-gradient-to-b from-[#B73BBE] to-[#992E9D] p-[0.5rem] rounded-[10px] text-white cursor-pointer">
                Signup
              </div>
            </>
          )}
        </div>
      </div>

      <div className="bg-[#3b3b3e] w-full p-1 flex items-center justify-center">
        <ul className="text-gray-300 md:text-base text-xs flex items-center md:gap-[2rem] gap-[1rem] cursor-pointer">
          <li onClick={() => scrollHandler("section1")}>
            <NavLink to={"/"}>Overview</NavLink>
          </li>
          <li onClick={() => scrollHandler("section2")}>
            <NavLink to={"/curriculum"}>Curriculum</NavLink>
          </li>
          <li onClick={() => scrollHandler("section3")}>
            <NavLink to={"/refund"}>Refund</NavLink>
          </li>
          <li onClick={() => scrollHandler("section4")}>
            <NavLink to={"/testimonials"}>Testimonials</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
