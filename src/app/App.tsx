import HomePage from "@/pages/Home/ui/Home";
import { Layout } from "@/widgets/Layout/Layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/signin" element={''} />
                <Route path="/signup" element={''} />
            </Routes>
        </Layout>
    );
};

export default App;
