import React from "react";
import bg_landing_video from "./assets/bg_landing_video.mp4";
import { Button as B } from "@material-tailwind/react";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const nav = useNavigate();
    const [count, setCount] = React.useState(5);
    React.useEffect(() => {
        if (count > 0) {
            setTimeout(() => {
                setCount(count - 1);
            }, 1000);
        } else nav("/");
    }, [count]);
    return (
        <>
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
                    <h1 className="text-white f-extralight text-9xl">:{"("}</h1>
                    <h1 className="text-white f-extralight text-5xl">
                        Look's like you've found yourself in no mans land.
                    </h1>
                    <h1 className="text-white f-extralight text-4xl">
                        404 Error - Page not found.
                    </h1>
                    <h1 className="text-white f-extralight text-3xl">
                        Redirecting in {count}.
                    </h1>
                </div>
            </div>
        </>
    );
};

export default PageNotFound;
