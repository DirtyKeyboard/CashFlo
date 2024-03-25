import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const IsUserLoggedIn = () => {
    const nav = useNavigate();
    React.useEffect(() => {
        const check = async () => {
            try {
                const r = await axios.get("/api/checkToken", {
                    headers: { token: sessionStorage.getItem("token") },
                });
                nav("/home");
            } catch (err) {}
        };
        check();
    }, []);
    return <></>;
};

export default IsUserLoggedIn;
