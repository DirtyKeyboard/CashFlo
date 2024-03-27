import React from "react";
import CheckToken from "./CheckToken";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import moment from "moment";
import CustomChart from "./CustomChart";

const Home = () => {
    const config = {
        height: 240,
        name: "Test",
        data: [1, 2, 3, 4],
        categories: [100, 200, 300, 400],
    };

    const nav = useNavigate();
    const [time, setTime] = React.useState("");
    React.useEffect(() => {
        const time = parseInt(moment().format("H"));
        if (time >= 5 && time <= 12) setTime("Morning");
        else if (time >= 12 && time <= 16) setTime(" Afternoon");
        else setTime("Evening");
    }, []);
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#000000] to-[#3f044985]" />
            <div className="absolute top-0 left-0 w-screen h-screen">
                <Nav />
                <CheckToken />
                <div className="px-4 flex flex-col">
                    <h1 className="f-medium text-[5rem] text-white">
                        {" "}
                        Good {time}, {sessionStorage.getItem("first_name")}
                    </h1>
                    <h1 className="f-light text-4xl text-white">
                        {" "}
                        Here are your insights for today.
                    </h1>
                    \
                    <div className="flex flex-row gap-4 mb-52">
                        <div className="bg-gray-900 p-2 rounded-3xl">
                            <CustomChart {...config} />
                        </div>
                    </div>
                </div>
                <Button
                    onClick={() => {
                        sessionStorage.removeItem("token");
                        sessionStorage.removeItem("username");
                        sessionStorage.removeItem("first_name");
                        nav("/");
                    }}
                    color="red"
                >
                    Logout
                </Button>
            </div>
        </>
    );
};

export default Home;
