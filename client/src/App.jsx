import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
import Register from "./Register";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}

export default App;
