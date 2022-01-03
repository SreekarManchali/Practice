import OptimConnections from "./OptimConnections/OptimConnections";
import {Spacer} from "../../shared/components";

export const Connections = () => {
    return (
        <div className="bx--grid">
            <h2>Optim Connections</h2>
            <p>
                You can add new connections or edit/delete the existing ones
                from all the users.
            </p>
            <Spacer spacing={10} />
            <OptimConnections />
        </div>
    );
};
