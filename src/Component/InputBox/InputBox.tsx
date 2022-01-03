import {TextInput} from "carbon-components-react";
import "./InputBox.scss";

const InputBox = (props: any) => {
    return (
        <>
            <div className="bx--col-lg-4 bx--offset-lg-1 bx--col-md-3 bx--offset-md-1 bx--col-sm-3 inputbox1">
                <TextInput
                    id="test1"
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
                    labelText={props.header2}
                    value={props.value2}
                    className="inputbox"
                />
                <br />
                <br />
                <TextInput
                    id="test2"
                    invalidText="A valid value is required"
                    labelText={props.header3}
                    value={props.value3}
                    className="inputbox"
                />
            </div>

            <div className=" bx--col-lg-4  bx--col-md-3 bx--col-sm-3 inputbox2">
                <TextInput
                    id="test2"
                    invalidText="A valid value is required"
                    labelText={props.header1}
                    value={props.value1}
                    className="inputbox"
                />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <TextInput
                    id="test2"
                    invalidText="A valid value is required"
                    labelText={props.header4}
                    value={props.value4}
                    className="inputbox"
                />
            </div>
        </>
    );
};

export default InputBox;
