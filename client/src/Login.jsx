import logo from "./assets/logo.png";
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import IsUserLoggedIn from "./IsUserLoggedIn";

function Login() {
    const error = (msg) => {
        toast.error(msg, { position: "bottom-right" });
    };
    const [form, setForm] = useState({ email: "", password: "" });
    const nav = useNavigate();
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const login = async () => {
        try {
            const r = await axios.get("/api/login", { headers: form });
            console.log(r.data);
            sessionStorage.setItem("token", r.data.accessToken);
            sessionStorage.setItem("username", r.data.username);
            sessionStorage.setItem("first_name", r.data.first_name);
            nav("/home");
        } catch (err) {
            error("Email or password invalid, please try again.");
        }
    };
    return (
        <>
            <ToastContainer />
            <IsUserLoggedIn />
            <div
                className="flex items-center justify-center h-screen"
                id="gradient"
            >
                <form className="w-[30rem] h-[45rem] rounded-3xl p-4 flex flex-col items-center shadow-inner bg-gray-100 gap-10">
                    <img src={logo} className="w-[12rem]" />
                    <Input
                        label="Email"
                        color="purple"
                        name="email"
                        onChange={handleChange}
                    />
                    <Input
                        onChange={handleChange}
                        label="Password"
                        type="password"
                        color="purple"
                        name="password"
                    />
                    <div className="flex gap-2">
                        <Button color="purple" onClick={login}>
                            Log In
                        </Button>
                        <Button onClick={() => nav("/")}>Go Back</Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
