import React, { useState } from "react";
import Link from "next/link";
import { RiAccountCircleLine } from "react-icons/ri";

const Navbar = ({
  Logout,
  user,
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
    
      <div
        className="flex flex-col md:flex-row md:justify-start justify-center items-center py-1 shadow-md shadow-[#8956F1] sticky top-0 bg-gradient-to-r from-[#241B35] to-[#8956F1]  z-50 h-12"
      >
        <div className="logo mr-auto md:mx-5 cursor-pointer">
          <Link href={"/"}>
            <img id="img"
              src="/c.png"
              alt="Picture of the author"
             
            />
          </Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 font-semibold md:text-md">
            <Link href={"/"}>
              <li className="hover:text-white">Home</li>
            </Link>
            <Link href={"/about"}>
              <li className="hover:text-white">About</li>
            </Link>
            <Link href={"/blog"}>
              <li className="hover:text-white">Blog</li>
            </Link>
            <Link href={"/career"}>
              <li className="hover:text-white">Career</li>
            </Link>
            <Link href={"/product"}>
              <li className="hover:text-white">Products</li>
            </Link>
            <Link href={"/services"}>
              <li className="hover:text-white">Services</li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:text-white">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="cart items-center absolute right-0 top-3 mx-5 cursor-pointer flex">
          <span
            onMouseOver={() => {
              setDropdown(true);
            }}
            onMouseLeave={() => {
              setDropdown(false);
            }}
            className="fixed right-10 top-3 z-30 cursor-pointer"
          >
            {dropdown && (
              <div className="absolute right-5 top-5 py-3 rounded-md px-5 w-32 bg-[#5540af] text-sm z-30">
                <ul>
                  <Link href={"/myaccount"}>
                    <li className="py-1 hover:text-white">MY Account</li>
                  </Link>

                  <li onClick={Logout} className="py-1 hover:text-white">
                    Logout
                  </li>
                </ul>
              </div>
            )}
            {user.value && (
              <RiAccountCircleLine className="text-xl md:text-2xl mx-2" />
            )}
          </span>
          {!user.value && (
            <Link href={"/login"}>
              <button className="bg-blue-600 px-2 py-1 rounded-md text-sm text-white mx-2">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
