import React from "react";
import Nav from "./Nav";
import { Input, Button } from "@material-tailwind/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { toast, ToastContainer } from "react-toastify";

const Account = () => {
    const nav = useNavigate();
    const [edit, setEdit] = React.useState(false);
    const [bt, setBt] = React.useState("Edit");
    const [form, setForm] = React.useState(null);
    React.useEffect(() => {
        const getUser = async () => {
            try {
                const r = await axios.get("/api/checkToken", {
                    headers: { token: sessionStorage.getItem("token") },
                });
                setForm({
                    email: r.data.user.email,
                    password: r.data.user.password,
                    username: r.data.user.username,
                    first_name: r.data.user.first_name,
                    last_name: r.data.user.last_name,
                    salary: r.data.user.salary,
                    debt: r.data.user.debt,
                });
            } catch (e) {
                sessionStorage.removeItem("username");
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("first_name");
                nav("/");
            }
        };
        getUser();
    }, []);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-[#000000] to-[#3f044985]" />
            <div className="absolute top-0 left-0 w-screen h-screen">
                <Nav />
                <div className="flex flex-col gap-4 justify-center items-center">
                    <h1 className="text-7xl text-white f-light">
                        Your Account
                    </h1>
                    {form ? (
                        <div className="flex flex-col bg-gray-200 w-[38rem] h-[46rem] rounded-xl gap-8 p-8">
                            {edit ? (
                                <h1 className="place-self-end f-medium text-red-500 animate-pulse">
                                    EDIT MODE
                                </h1>
                            ) : null}
                            <div className="flex flex-row gap-4">
                                <Input
                                    label="First Name"
                                    color="purple"
                                    value={form.first_name}
                                    readOnly={!edit}
                                    name="first_name"
                                    onChange={handleChange}
                                />
                                <Input
                                    label="Last Name"
                                    color="purple"
                                    value={form.last_name}
                                    readOnly={!edit}
                                    name="last_name"
                                    onChange={handleChange}
                                />
                            </div>
                            <Input
                                label="Username"
                                color="purple"
                                value={form.username}
                                readOnly={!edit}
                                name="username"
                                onChange={handleChange}
                            />
                            <Input
                                label="Email"
                                color="purple"
                                value={form.email}
                                readOnly={!edit}
                                name="email"
                                onChange={handleChange}
                            />
                            <Input
                                type="number"
                                label="Your Salary"
                                color="purple"
                                value={form.salary}
                                readOnly={!edit}
                                name="salary"
                                onChange={handleChange}
                            />
                            <Input
                                type="number"
                                label="Your Debt"
                                color="purple"
                                value={form.debt}
                                readOnly={!edit}
                                name="debt"
                                onChange={handleChange}
                            />
                            <Button
                                color="purple"
                                onClick={() => {
                                    if (bt === "Edit") {
                                        setEdit(!edit);
                                        setBt("Save");
                                    } else if (bt === "Save") {
                                        setBt("Are you sure?");
                                    } else {
                                        setBt("Edit");
                                        setEdit(!edit);
                                    }
                                }}
                            >
                                {bt}
                            </Button>
                        </div>
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </>
    );
};

export default Account;
