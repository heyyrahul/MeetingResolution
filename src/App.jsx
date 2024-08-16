import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import HamburgerMenu from './components/HamburgerMenu';
import AppRoutes from './routes/AppRoutes';
import TabPanel from './components/TabPanle';

function App() {
  const [openTabs, setOpenTabs] = useState([]);

  const handleTabChange = (path) => {
    if (!openTabs.includes(path)) {
      setOpenTabs([...openTabs, path]);
    }
  };

  const handleTabClose = (path) => {
    setOpenTabs(openTabs.filter(tab => tab !== path));
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <HamburgerMenu handleTabChange={handleTabChange} />
        <Box sx={{ flexGrow: 1 }}>
          <TabPanel openTabs={openTabs} handleTabClose={handleTabClose} />
          <AppRoutes/>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
