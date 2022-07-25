import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login} from "./pages/Login";
import {Home} from "./pages/Home";
import {Register} from "./pages/Register";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    )
}