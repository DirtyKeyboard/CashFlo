import React from "react";
import bg_landing_video from "./assets/bg_landing_video.mp4";
import { Button as B } from "@material-tailwind/react";
import logo from "./assets/logoWithText.png";
import { useNavigate } from "react-router-dom";
import IsUserLoggedIn from "./IsUserLoggedIn";

const Landing = () => {
    const nav = useNavigate();
    return (
        <>
            <IsUserLoggedIn />
            <div className="bg-[#14021d] fixed top-0 left-0">
                <video
                    src={bg_landing_video}
                    autoPlay
                    loop
                    muted
                    className="object-cover h-screen w-screen opacity-25"
                />
            </div>

            <div className="absolute w-full h-full top-0 flex flex-row justify-center">
                <div className="w-full flex flex-col gap-4 items-center justify-center">
                    <h1 className="text-white f-extralight text-9xl">
                        Welcome
                    </h1>
                    <h1 className="text-white f-extralight text-6xl">
                        Let's get you set up.
                    </h1>
                    <div className="flex gap-4">
                        <B color="purple" onClick={() => nav("/login")}>
                            Login
                        </B>
                        <B color="white" onClick={() => nav("/register")}>
                            Register
                        </B>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 items-center justify-center">
                    <img src={logo} />
                </div>
            </div>
            <div
                className="fixed top-0 left-0 w-screen h-16 flex flex-row-reverse items-center px-4 gap-10"
                id="landingNav"
            >
                <a
                    className="text-white f-medium navButton"
                    href="https://www.andrewhawileh.com"
                >
                    My Portfolio
                </a>
                <a
                    className="text-white f-medium navButton"
                    href="https://github.com/DirtyKeyboard/CashFlo"
                >
                    Repo Link
                </a>
                <button
                    className="text-white f-medium navButton"
                    onClick={() => {
                        alert("This button does nothing yet! D:");
                    }}
                >
                    About CashFlo
                </button>
            </div>
        </>
    );
};

export default Landing;
