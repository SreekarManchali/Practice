import {Route, Navigate, Routes} from "react-router-dom";

import Login from "../views/Login/Login";

export const LoginRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
    );
};
