import {useEffect, useState} from "react";
import App from "./App";

export const HealthCheck = () => {
    const [update, setUpdate] = useState(false);
    const [errorMessage, setErrorMessage] = useState<Error | false | null>(
        null
    );

    const healthCheck = async () => {
        if (!errorMessage) {
            try {
                // Call HealthCheck API Here.
                setErrorMessage(false);
            } catch (e) {
                setErrorMessage(null);
            }
        }
    };

    useEffect(() => {
        if (!update) {
            healthCheck();
            setUpdate(true);
        }
    }, [healthCheck, update]);

    if (errorMessage === false) {
        return <App />;
    } else if (errorMessage === null) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                Oops! Something went wrong! <br />
                {errorMessage.message}
            </>
        );
    }
};
