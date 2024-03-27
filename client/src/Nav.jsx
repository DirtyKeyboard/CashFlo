import React from "react";
import { NavLink } from "react-router-dom";
import home from "./assets/home.svg";

const Nav = () => {
    return (
        <div className="h-16 flex items-center px-2 gap-5" id="nav">
            {/* {ICON}Account | Budget Menu | Net Worth | Salary */}
            <div className="flex flex-row items-center justify-center gap-4">
                <a href="/home">
                    <img
                        src={home}
                        width="35px"
                        className="hover:cursor-pointer"
                    />
                </a>
                <NavLink
                    to="/myAccount"
                    className="text-white f-light navButton text-lg"
                >
                    My Account
                </NavLink>

                <NavLink
                    to="/budget"
                    className="text-white f-light navButton text-lg"
                >
                    Budget Menu
                </NavLink>
                <NavLink
                    to="/net"
                    className="text-white f-light navButton text-lg"
                >
                    Net Worth
                </NavLink>
            </div>
        </div>
    );
};

export default Nav;
