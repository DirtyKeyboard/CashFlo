import React from "react";
import Chart from "react-apexcharts";

const CustomChart = ({ height, name, data, categories }) => {
    const config = {
        type: "line",
        height: height,
        series: [
            {
                name: name,
                data: data,
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
            colors: ["#a855f7"],
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
                        colors: "#ffffff",
                        fontSize: "13px",
                        fontFamily: "Bai Jamjuree, sans-serif",
                        fontWeight: 300,
                    },
                },
                categories: categories,
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#fff",
                        fontSize: "13px",
                        fontFamily: "Bai Jamjuree, sans-serif",
                        fontWeight: 300,
                    },
                },
            },
            grid: {
                show: false,
            },
            fill: {
                opacity: 0.8,
            },
            tooltip: {
                theme: "dark",
            },
        },
    };
    return <Chart {...config} />;
};

export default CustomChart;
