import { useState } from "react";
import logo from "./assets/logo.png";
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { validate } from "react-email-validator";
import IsUserLoggedIn from "./IsUserLoggedIn";

function Login() {
    const error = (msg) => {
        toast.error(msg, { position: "bottom-right" });
    };
    const [form, setForm] = useState({
        email: "",
        password: "",
        username: "",
        first_name: "",
        last_name: "",
    });
    const nav = useNavigate();
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };
    const register = async () => {
        if (form.username.length < 8)
            error("Username must be at least 8 characters.");
        else if (!validate(form.email))
            error("Please make sure your email address is valid.");
        else if (form.password.length < 8)
            error("Password must be at least 8 characters.");
        else {
            try {
                const r = await axios.post("/api/register", form);
                sessionStorage.setItem("token", r.data.accessToken);
                sessionStorage.setItem("username", form.username);
                sessionStorage.setItem("first_name", form.first_name);
                nav("/home");
            } catch (e) {
                error(
                    "Error creating user, this username or password may already be in use."
                );
            }
        }
    };
    return (
        <>
            <IsUserLoggedIn />
            <ToastContainer />
            <div
                className="flex items-center justify-center h-screen"
                id="gradient"
            >
                <form className="w-[30rem] h-[45rem] rounded-3xl p-4 flex flex-col items-center shadow-inner bg-gray-100 gap-10">
                    <img src={logo} className="w-[12rem]" />

                    <div className="flex w-full gap-6">
                        <Input
                            onChange={handleChange}
                            label="First Name"
                            color="purple"
                            name="first_name"
                        />
                        <Input
                            onChange={handleChange}
                            label="Last Name"
                            color="purple"
                            name="last_name"
                        />
                    </div>

                    <Input
                        onChange={handleChange}
                        label="Email"
                        color="purple"
                        name="email"
                    />

                    <Input
                        onChange={handleChange}
                        label="Username"
                        color="purple"
                        name="username"
                    />
                    <Input
                        onChange={handleChange}
                        label="Password"
                        type="password"
                        color="purple"
                        name="password"
                    />
                    <div className="flex gap-2">
                        <Button color="purple" onClick={register}>
                            Register
                        </Button>
                        <Button onClick={() => nav("/")}>Go Back</Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
