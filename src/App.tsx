import {useSelector} from "react-redux";

import {LoginStates} from "./shared/types/AppStates";
import {LoginRouter, MainRouter} from "./routes";

import "./app.scss";

const renderAppState = (loginState: LoginStates) => {
    switch (loginState) {
        case LoginStates.LOGGED_IN:
            return <MainRouter />;
        case LoginStates.LOGGED_OUT:
            return <LoginRouter />;
        default:
            return "LOADING";
    }
};

const App = () => {
    const {loginState} = useSelector((s: any) => s.app);

    return <>{renderAppState(loginState)}</>;
};

export default App;
