import "./MainPage.scss";
import {Tab, Tabs, Button} from "carbon-components-react";
import SelectServer from "../SelectServer";
import InputBox from "../InputBox";

const MainPage = () => {
    return (
        <div className="bx--grid   maindiv ">
            <div className=" bx--row  ">
                <p className="bx--col-lg-16  firstP">
                    Configuration & Settings
                </p>

                <p className="bx--col-lg-16  secondP">
                    You can choose any configuration below and update it
                </p>
            </div>

            <div className=" tabdiv">
                <Tabs scrollIntoView={false}>
                    <Tab href="#" id="tab-1" label="Optim">
                        <div className="bx--row">
                            <SelectServer />
                            <InputBox
                                header="Parameter File Location"
                                header1="DSTX"
                                header2="Logs"
                                header3="Source X File"
                                header4="Convert Request Output"
                                header5="DSTX File"
                                value="/data/OptimArchives/"
                            />
                        </div>
                        <div className="btndiv">
                            <Button className="Button1 ">Submit</Button>
                        </div>
                    </Tab>
                    <Tab href="#" id="tab-2" label="Hadoop"></Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default MainPage;
