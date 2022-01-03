import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {HealthCheck} from "./HealthCheck";
import store from "./redux/store";
import "./index.scss";

const MyApp = () => {
    return (
        <Provider store={store}>
            <HealthCheck />
        </Provider>
    );
};

const Root = () => {
    return (
        <Router>
            <MyApp />
        </Router>
    );
};

ReactDOM.render(<Root />, document.getElementById("root"));
