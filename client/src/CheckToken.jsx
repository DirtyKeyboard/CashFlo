import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CheckToken = () => {
    const nav = useNavigate();
    React.useEffect(() => {
        const check = async () => {
            try {
                const r = await axios.get("/api/checkToken", {
                    headers: { token: sessionStorage.getItem("token") },
                });
                console.log(r);
            } catch (err) {
                sessionStorage.removeItem("username");
                sessionStorage.removeItem("token");
                nav("/");
            }
        };
        check();
    }, []);
    return <></>;
};

export default CheckToken;
