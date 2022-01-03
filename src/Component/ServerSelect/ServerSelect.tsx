import {UnorderedList, ListItem} from "carbon-components-react";
import {TrashCan24, ChevronSortUp32, Pen24} from "@carbon/icons-react";

import "./ServerSelect.scss";
const serverSelection = e => {
    console.log(e);
};
const ServerSelect = () => {
    return (
        <div className="bx--col-lg-8 bx--offset-lg-10 bx--col-md-3 bx--col-sm-3 ">
            <div className="dropdowndiv">
                <p>SELECT AN OPTIM SERVER</p>

                <UnorderedList>
                    <ListItem className="firstli" onClick={serverSelection}>
                        Server One
                        <br />
                        <span> 192.168.01</span>
                        <Pen24 className="penmark1" />
                        4 <TrashCan24 className="deletemark1" />
                    </ListItem>
                    <br />
                    <ListItem className="secondli">
                        Server Two
                        <br />
                        <span>192.168.0.1:4000</span>
                        <Pen24 className="penmark2" />
                        <TrashCan24 className="deletemark2" />
                    </ListItem>
                    <br />
                    <ListItem className="thirdli">
                        Server Three
                        <br />
                        <span>192.168.0.1</span>
                        <Pen24 className="penmark3" />{" "}
                        <TrashCan24 className="deletemark3" />
                    </ListItem>
                </UnorderedList>
                <ChevronSortUp32 className="up" />
            </div>
        </div>
        // </div>
    );
};

export default ServerSelect;
