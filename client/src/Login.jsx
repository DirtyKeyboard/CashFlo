import logo from "./assets/logo.png";
import { Input, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Login() {
    const nav = useNavigate();
    return (
        <>
            <div
                className="flex items-center justify-center h-screen"
                id="gradient"
            >
                <form className="w-[30rem] h-[45rem] rounded-3xl p-4 flex flex-col items-center shadow-inner bg-gray-100 gap-10">
                    <img src={logo} className="w-[12rem]" />
                    <Input label="Email" color="purple" />
                    <Input label="Password" type="password" color="purple" />
                    <div className="flex gap-2">
                        <Button color="purple">Log In</Button>
                        <Button onClick={() => nav("/")}>Go Back</Button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
