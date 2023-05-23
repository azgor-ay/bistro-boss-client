import React from "react";
import { Link, NavLink } from "react-router-dom";
import cartIcon from "../../assets/icon/shopCart.png";
import profile from "../../assets/others/profile.png";

const NavBar = () => {
  return (
    <nav className="navbar fixed max-w-screen-lg px-12 bg-black bg-opacity-40 text-white z-30">
      <div className="navbar-start">
        {/* Mobile Nav */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="logo uppercase">
            <h2 className="text-2xl font-extrabold -mb-2">BISTRO BOSS</h2>
            <p className="tracking-[0.45rem]">Restaurant</p>
          </div>
        </Link>
      </div>

      {/* Large Device Nav */}
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center justify-between gap-5 uppercase font-semibold text-sm">
            <NavLink>home</NavLink>
            <NavLink>contact us</NavLink>
            <NavLink>dashboard</NavLink>
            <NavLink>our menu</NavLink>
            <NavLink>our shop</NavLink>
            <NavLink>
              <img className="w-12" src={cartIcon} alt="" />
            </NavLink>
            <NavLink></NavLink>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 border-2 rounded-full">
              <img src={profile} className=""/>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black bg-opacity-40 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
