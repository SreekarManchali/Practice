import {
    HeaderContainer,
    Header as CarbonHeader,
    HeaderName
} from "carbon-components-react/lib/components/UIShell";

const Header = () => {
    return (
        <HeaderContainer
            render={() => (
                <>
                    <CarbonHeader aria-label="Archive Access">
                        <HeaderName prefix="">Archive Access</HeaderName>
                    </CarbonHeader>
                </>
            )}
        />
    );
};

export default Header;
