import HeaderContainer from "carbon-components-react/lib/components/UIShell/HeaderContainer";
import {
    Header,
    HeaderName,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent
} from "carbon-components-react/lib/components/UIShell";
import "./HeaderMain.scss";

import {Dropdown} from "carbon-components-react";

const HeaderMain = (props: any) => {
    return (
        <div className="bx--grid">
            <div className="bx--row">
                <div className="bx--col-lg-16 sec bx--col-md-8 bx--col-sm-4">
                    <HeaderContainer
                        render={({isSideNavExpanded, onClickSideNavExpand}) => (
                            <>
                                <Header aria-label="IBM Platform Name">
                                    <SkipToContent />

                                    <HeaderName href="#" prefix="Optim">
                                        [Archive Access]
                                    </HeaderName>
                                    <HeaderGlobalBar>
                                        <HeaderGlobalAction
                                            aria-label="Dropdown"
                                            onClick={() => {}}
                                        >
                                            <Dropdown
                                                id="inline"
                                                label=""
                                                items={[
                                                    {
                                                        id: "option-0",

                                                        text: "Column Chart"
                                                    }
                                                ]}
                                                itemToString={item =>
                                                    item ? item.text : ""
                                                }
                                                style={{color: "white"}}
                                            />
                                        </HeaderGlobalAction>
                                    </HeaderGlobalBar>
                                </Header>
                            </>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
