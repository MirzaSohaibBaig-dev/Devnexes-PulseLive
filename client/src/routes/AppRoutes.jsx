import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Host from "../pages/Host";
import Join from "../pages/Join";
import Session from "../pages/Session";
import Results from "../pages/Results";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/host" element={<Host />} />
                <Route path="/join" element={<Join />} />
                <Route path="/session" element={<Session />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;