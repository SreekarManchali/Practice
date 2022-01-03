import {Tab, Tabs} from "carbon-components-react";
import {Spacer} from "../../shared/components";

import HadoopConfigurations from "./HadoopConfigurations/HadoopConfigurations";
import OptimConfigurations from "./OptimConfigurations/OptimConfigurations";

const Configurations = () => {
    return (
        <div className="bx--grid">
            <h2>Configuration &amp; Settings</h2>
            <p>You can choose any configuration below and update it.</p>
            <Spacer spacing={12} />
            <Tabs scrollIntoView={false}>
                <Tab label="Optim">
                    <Spacer spacing={8} />
                    <OptimConfigurations />
                </Tab>
                <Tab label="Hadoop">
                    <HadoopConfigurations />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Configurations;
