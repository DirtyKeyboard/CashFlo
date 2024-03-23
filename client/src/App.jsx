import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default App;
