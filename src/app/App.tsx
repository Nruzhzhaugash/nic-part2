import HomePage from "@/pages/Home/ui/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/signin" element={''} />
            <Route path="/signup" element={''} />
        </Routes>
    );
};

export default App;
