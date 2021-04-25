import React from "react";
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index } = props;
  
    return (
      <div
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
      >
        <Box p={3}>{children}</Box>
      </div>
    );
  }
export default TabPanel;