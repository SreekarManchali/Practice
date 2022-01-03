import {useState} from "react";
import {Dropdown, Button} from "carbon-components-react";
import {ServerSelector, TextInput, Spacer} from "../../../shared/components";
import {tempConversionTypes, tempServers} from "../../../temp";

const OptimConfigurations = () => {
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
            <div className="bx--col-lg-4">
                <ServerSelector
                    servers={tempServers}
                    title="Select an optim server"
                    onSelectServer={serverId => setSelectedServer(serverId)}
                    selectedServer={selectedServer}
                />
            </div>
            <Spacer spacing={10} />
            <div className="bx--col-lg-7 bx--offset-lg-1">
                <div className="bx--row">
                    <div className="bx--col-md-4 bx--col-lg-6">
                        <Dropdown
                            ariaLabel="Convert File To"
                            items={tempConversionTypes}
                            label="Select a type"
                            titleText="Convert File To"
                        />
                        <Spacer spacing={10} />
                        <TextInput
                            labelText="Parameters Files Location"
                            placeholder="Enter or browse file path"
                            isBrowseVisible
                        />
                        <Spacer spacing={10} />
                        <TextInput
                            labelText="DSTX File"
                            placeholder="Enter or browse file path"
                            isBrowseVisible
                        />
                    </div>
                    <div className="bx--col-md-4 bx--col-lg-6">
                        <TextInput
                            labelText="Source X File"
                            placeholder="Enter or browse file path"
                            isBrowseVisible
                        />
                        <Spacer spacing={10} />
                        <TextInput
                            labelText="Convert Request Output"
                            placeholder="Enter or browse file path"
                            isBrowseVisible
                        />
                        <Spacer spacing={10} />
                        <TextInput
                            labelText="Logs"
                            placeholder="Enter or browse file path"
                            isBrowseVisible
                        />

                        <Spacer spacing={13} />
                        <div
                            className="bx--row"
                            style={{justifyContent: "flex-end"}}
                        >
                            <Button>Next</Button>
                            <Spacer spacing={6} isHorizontal />
                            <Button kind="secondary">Cancel</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptimConfigurations;
