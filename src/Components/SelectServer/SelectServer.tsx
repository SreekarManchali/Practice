import {UnorderedList, ListItem} from "carbon-components-react";
import {CheckmarkFilled32, ChevronSortUp32} from "@carbon/icons-react";
import "./SelectServer.scss";
const serverSelection = e => {
    console.log(e);
};
const SelectServer = () => {
    return (
        <div className="bx--col-lg-4  bx--col-md-3 bx--col-sm-3">
            <div style={{display: "flex"}}>
                <div className="dropdowndiv">
                    <p>SELECT AN OPTIM SERVER</p>

                    <UnorderedList>
                        <ListItem className="firstli" onClick={serverSelection}>
                            Server One
                            <br />
                            <span> 192.168.01</span>
                            <CheckmarkFilled32 className="checkmark1" />
                        </ListItem>
                        <br />
                        <ListItem className="secondli">
                            Server Two
                            <br />
                            <span>192.168.0.1:4000</span>
                            <CheckmarkFilled32 className="checkmark2" />
                        </ListItem>
                        <br />
                        <ListItem className="thirdli">
                            Server Three
                            <br />
                            <span>192.168.0.1</span>
                            <CheckmarkFilled32 className="checkmark3" />
                        </ListItem>
                    </UnorderedList>
                    <ChevronSortUp32 className="up" />
                </div>
            </div>
        </div>
    );
};

export default SelectServer;
