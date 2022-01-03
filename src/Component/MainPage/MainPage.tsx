import "./MainPage.scss";
import {Button} from "carbon-components-react";

import InputBox from "../InputBox";
import ServerSelect from "../ServerSelect";
import {AddAlt24} from "@carbon/icons-react";

const MainPage = () => {
    return (
        <div className="bx--grid  maindiv ">
            <div className=" bx--row  ">
                <p className="bx--col-lg-16  firstP">Optim Connections</p>

                <p className="bx--col-lg-16  secondP">
                    You can add new connections or edit/delete the existing ones
                    for all the users.
                </p>
            </div>

            <div className="tabdiv">
                <Button className="add_button1">
                    <AddAlt24 />
                    <span>Add New</span>
                </Button>
                <p className="Header_page">Server Two</p>

                <div className="bx--row">
                    <InputBox
                        header="Host"
                        header1="Port"
                        header2="Database"
                        header3="Username"
                        header4="Password"
                        value="192.186.0.1"
                        value1="4000"
                        value2="Optim"
                        value3="jhon"
                        value4="**********"
                    />
                    <ServerSelect />
                </div>

                <div className="btndiv">
                    <Button className="Button1 ">Update Server</Button>
                    <Button className="Button_2 ">Delete Server</Button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
