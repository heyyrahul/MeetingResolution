import React from 'react';
import { Tabs, Tab, IconButton } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const TabPanel = ({ openTabs, handleTabClose }) => {
  const location = useLocation();

  return (
    <Tabs
      value={location.pathname}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="auto"
    >
      {openTabs.map((path, index) => (
        <Tab
          key={index}
          label={
            <span>
              {path.replace('/', '') || 'Home'}
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTabClose(path);
                }}
                sx={{ marginLeft: 1 }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </span>
          }
          value={path}
          component={Link}
          to={path}
        />
      ))}
    </Tabs>
  );
};

export default TabPanel;
