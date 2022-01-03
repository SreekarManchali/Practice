import {Tile} from "carbon-components-react";
import {TrashCan24, Pen24} from "@carbon/icons-react";

type ServerInterface = {
    id: number;
    name: string;
    host: string;
    port: number;
    database: string;
    username: string;
};

type Props = {
    servers: ServerInterface[];
    title: string;
    onSelectServer?: any;
    selectedServer?: number | null;
    isEditVisible?: boolean;
    isDeleteVisible?: boolean;
};

export const ServerSelector = ({
    servers,
    title,
    onSelectServer,
    selectedServer
}: Props) => {
    return (
        <Tile className="server-selector--tile">
            <h5>{title}</h5>
            <div className="servers--container">
                s
                {servers.map((server, idx) => {
                    return (
                        <div
                            key={idx}
                            className={`server-wrapper ${
                                selectedServer === server.id &&
                                "selected-server"
                            }`}
                            onClick={() => onSelectServer(server.id)}
                        >
                            <div className="indicator green" />
                            <div className="server-information">
                                <h5>{server.name}</h5>
                                <p>
                                    {server.host}:{server.port}
                                </p>
                            </div>
                            {/* {selectedServer === server.id && ( */}
                            <div className="selected-container">
                                <Pen24 className="checkmark1" />
                            </div>
                            <div className="selected-container">
                                <TrashCan24 className="checkmark" />
                            </div>

                            {/* )} */}
                        </div>
                    );
                })}
            </div>
        </Tile>
    );
};
