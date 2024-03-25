import React from "react";
import CheckToken from "./CheckToken";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import moment from "moment";
import Chart from "react-apexcharts";

const Home = () => {
    const chartConfig = {
        type: "line",
        height: 240,
        series: [
            {
                name: "Sales",
                data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
            },
        ],
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
            },
            title: {
                show: "",
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#020617"],
            stroke: {
                lineCap: "round",
                curve: "smooth",
            },
            markers: {
                size: 0,
            },
            xaxis: {
                axisTicks: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
                categories: [
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#616161",
                        fontSize: "12px",
                        fontFamily: "inherit",
                        fontWeight: 400,
                    },
                },
            },
            grid: {
                show: true,
                borderColor: "#dddddd",
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                padding: {
                    top: 5,
                    right: 20,
                },
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "dark",
            },
        },
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
            <Nav className="border border-red-500" />
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
                    <div className="bg-white p-2 rounded-3xl">
                        <Chart {...chartConfig} />
                    </div>
                    <div className="bg-white p-2 rounded-3xl">
                        <Chart {...chartConfig} />
                    </div>
                    <div className="bg-white p-2 rounded-3xl">
                        <Chart {...chartConfig} />
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
