import {Route, Navigate, Routes} from "react-router-dom";

import DashboardLayout from "../shared/layout/DashboardLayout/DashboardLayout";

import Dashboard from "../views/Dashboard/Dashboard";
// import Configurations from "../views/Configurations/Configurations";
import {Connections} from "../views/Connections/Connections";

export const MainRouter = () => {
    return (
        <DashboardLayout>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                {/* <Route path="/configure" element={<Configurations />} /> */}
                <Route
                    path="/"
                    element={<Navigate replace to="/configure" />}
                />
                <Route path="/configure" element={<Connections />} />
            </Routes>
        </DashboardLayout>
    );
};
