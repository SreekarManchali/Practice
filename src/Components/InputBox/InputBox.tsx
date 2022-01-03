import {TextInput, Dropdown} from "carbon-components-react";
import "./InputBox.scss";

const InputBox = (props: any) => {
    return (
        <>
            <div className=" bx--col-lg-4 bx--offset-lg-1 bx--col-md-3 bx--offset-md-1 bx--col-sm-3 inputbox1">
                <Dropdown
                    ariaLabel="Dropdown"
                    id="carbon-dropdown-example"
                    items={[
                        {
                            id: "option-1",

                            text: " Business Object (CSV)"
                        },
                        {
                            id: "option-2",

                            text: "Business Object (XML)"
                        },
                        {
                            id: "option-3",

                            text: "Comma Separated Value(CSV)"
                        },
                        {
                            id: "option-4",

                            text: "Enterprise Content Management (ECM)"
                        },
                        {
                            id: "option-5",

                            text: "Extract(xf)"
                        },
                        {
                            id: "option-6",

                            text: "Hadoop File System(CSV)"
                        },
                        {
                            id: "option-7",

                            text: "XML"
                        }
                    ]}
                    itemToString={item => (item ? item.text : "")}
                    label="CSV"
                    titleText="Convert file to"
                />
                <br />
                <br />

                <TextInput
                    id="test2"
                    invalidText="A valid value is required"
                    labelText={props.header}
                    value={props.value}
                    className="inputbox"
                />
                <br />
                <br />
                <TextInput
                    id="test2"
                    invalidText="A valid value is required"
                    labelText={props.header1}
                    value={props.value}
                    className="inputbox"
                />
                <br />
                <br />
                <TextInput
                    id="test2"
                    invalidText="A valid value is required"
                    labelText={props.header2}
                    value={props.value}
                    className="inputbox"
                />
            </div>

            <div className=" bx--col-lg-4  bx--col-md-3 bx--col-sm-3 inputbox2">
                <TextInput
                    id="test2"
                    invalidText="A valid value is required"
                    labelText={props.header3}
                    value={props.value}
                    className="inputbox"
                />
                <br />
                <br />

                <TextInput
                    id="test2"
                    invalidText="A valid value is required"
                    labelText={props.header4}
                    value={props.value}
                    className="inputbox"
                />
                <br />
                <br />

                <TextInput
                    id="test2"
                    invalidText="A valid value is required"
                    labelText={props.header5}
                    value={props.value}
                    className="inputbox"
                />
            </div>
        </>
    );
};

export default InputBox;
