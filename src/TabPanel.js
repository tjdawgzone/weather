import React from "react";
function TabPanel(props){
    const{children, pane, index} = props;
    return(<div>
    {
        pane===index&&(<div>{children}</div>)
    }

    </div>)


}
export default TabPanel;