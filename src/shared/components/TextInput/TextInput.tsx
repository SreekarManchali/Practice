import {TextInput as Input, Button} from "carbon-components-react";
import {ViewOffFilled24} from "@carbon/icons-react";

type Props = {
    labelText: string;

    isBrowseVisible?: boolean;
    helperText?: string;
    id?: string;
    invalidText?: string;
    placeholder?: string;
    // icon: any;
};

export const TextInput = ({isBrowseVisible, helperText, ...rest}: Props) => {
    // const [type, setType] = useState("password");

    // const togglePasswordVisibility = () => {
    //     setType(type === "password" ? "text" : "password");
    //     // TogglePasswordVisibility.storyName = "Toggle password visibility";
    // };
    return (
        <div
            className={`text-input-container ${
                helperText && "helper-text-active"
            }`}
        >
            <Input {...rest} helperText={helperText} />

            {isBrowseVisible && (
                <Button>
                    <ViewOffFilled24
                    // type={type}
                    // togglePasswordVisibility={togglePasswordVisibility}
                    // ref={ref}
                    // {...props}
                    />
                </Button>
            )}
        </div>
    );
};
