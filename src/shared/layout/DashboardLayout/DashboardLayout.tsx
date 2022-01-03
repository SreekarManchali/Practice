import React from "react";
import {Content} from "carbon-components-react";
import Header from "./Header";

type Props = {
    children: React.ReactNode;
};

const DashboardLayout = (props: Props) => {
    return (
        <>
            <Header />
            <Content>{props.children}</Content>
        </>
    );
};

export default DashboardLayout;
