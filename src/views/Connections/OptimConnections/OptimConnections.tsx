import {useState} from "react";
import {Button} from "carbon-components-react";
import {ServerSelector, TextInput, Spacer} from "../../../shared/components";
import {tempServers} from "../../../temp";
import {AddAlt24} from "@carbon/icons-react";

const OptimConnections = (props, ref) => {
    const [selectedServer, setSelectedServer] = useState(null);

    // File Paths
    // const [parametersFilePath, setParametersFilePath] = useState("");
    // const [dstxFilePath, setDstxFilePath] = useState("");
    // const [sourceXFilePath, setSourceXFilePath] = useState("");
    // const [requestOutputPath, setRequestOutputPath] = useState("");
    // const [logsPath, setLogsPath] = useState("");

    // const [convertToType, setConvertToType] = useState("");

    return (
        <div className="bx--row">
            <div className="bx--col-lg-7 ">
                <Spacer spacing={13} />
                <Spacer spacing={13} />
                <Spacer spacing={13} />
                <h3>Server Two</h3>
                <div className="bx--row">
                    <Spacer spacing={11} />

                    <div className="bx--col-md-4 bx--col-lg-6">
                        <Spacer spacing={11} />
                        <TextInput labelText="Host" placeholder="192.186.0.1" />
                        <Spacer spacing={11} />
                        <TextInput labelText="Database" placeholder="Optim" />

                        <Spacer spacing={11} />
                        <TextInput
                            labelText="username"
                            placeholder="username"
                        />
                    </div>
                    <div
                        className="bx--col-md-4 bx--col-lg-6"
                        style={{position: "relative"}}
                    >
                        <Spacer spacing={11} />

                        <TextInput labelText="Port" placeholder="4000" />

                        <Spacer spacing={11} />
                        <div className="bx--row">
                            <div
                                className="bx--col-lg-12"
                                style={{position: "absolute", bottom: 0}}
                            >
                                <TextInput
                                    labelText="Password"
                                    placeholder="*********"
                                />
                            </div>
                        </div>
                        <Spacer spacing={12} />
                    </div>
                </div>
                <Spacer spacing={10} />
                <div
                    className="bx--row"
                    style={{display: "flex", justifyContent: "flex-end"}}
                >
                    <Button kind="primary">Update Server</Button>
                    <Spacer spacing={6} isHorizontal />

                    <Button kind="danger">Delete Server</Button>
                </div>
            </div>
            <Spacer spacing={10} isHorizontal />
            <div className="bx--col-lg-4">
                <Spacer spacing={8} />
                <Spacer spacing={6} isHorizontal />
                <Button style={{justifyContent: "flex-end", float: "right"}}>
                    <span> Add New</span>
                    <AddAlt24 style={{marginLeft: "1.5rem"}} />
                </Button>
                <Spacer spacing={13} />
                <ServerSelector
                    servers={tempServers}
                    title="Select an optim server"
                    onSelectServer={serverId => setSelectedServer(serverId)}
                    selectedServer={selectedServer}
                />
            </div>
        </div>
    );
};

export default OptimConnections;
