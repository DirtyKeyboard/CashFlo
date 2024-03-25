import React from "react";

const Nav = () => {
    return (
        <div className="h-16 flex items-center px-2 gap-5" id="nav">
            {/* {ICON}Account | Budget Menu | Net Worth | Salary */}
            <div className="flex flex-row items-center justify-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
                <a
                    href="myAccount"
                    className="text-white f-light navButton text-lg"
                >
                    My Account
                </a>
            </div>
            <a href="budget" className="text-white f-light navButton text-lg">
                Budget Menu
            </a>
            <a href="net" className="text-white f-light navButton text-lg">
                Net Worth
            </a>
        </div>
    );
};

export default Nav;
