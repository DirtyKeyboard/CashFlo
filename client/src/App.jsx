import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
