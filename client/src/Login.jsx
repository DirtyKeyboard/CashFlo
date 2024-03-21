import logo from "./assets/logo.png";
import { Input, Button } from "@material-tailwind/react";

function Login() {
    return (
        <>
            <div
                className="flex items-center justify-center h-screen"
                id="gradient"
            >
                <form className="w-[30rem] h-[45rem] rounded-3xl p-4 flex flex-col items-center shadow-inner bg-gray-100 gap-10">
                    <img src={logo} className="w-[12rem]" />
                    <Input
                        label="Username"
                        onChange={(e) => {
                            console.log(e.target.value);
                        }}
                    />
                    <Input label="Password" type="password" />
                    <Button>Log In</Button>
                </form>
            </div>
        </>
    );
}

export default Login;
