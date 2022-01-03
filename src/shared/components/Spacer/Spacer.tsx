type Props = {
    spacing?: number;
    isHorizontal?: boolean;
};

export const Spacer = (props: Props) => {
    return (
        <div
            className={`spacer-${props.isHorizontal ? "h" : "v"}-${
                props.spacing ? props.spacing : 1
            }`}
        />
    );
};
