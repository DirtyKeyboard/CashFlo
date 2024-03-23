import React from "react";
import CheckToken from "./CheckToken";

const Home = () => {
    return (
        <>
            <CheckToken />
            <div>Welcome, {sessionStorage.getItem("username")}</div>
        </>
    );
};

export default Home;
