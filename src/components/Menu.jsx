import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Menu = ({ handleTabChange }) => {
  return (
    <Box sx={{ width: 250, borderRight: '1px solid #ddd' }}>
      <Box sx={{ padding: 2 }}>
        <Button component={Link} to="/" onClick={() => handleTabChange('/')}>
          <HomeIcon /> Home
        </Button>
      </Box>
      <Box>
        <Button component={Link} to="/circular-resolution" onClick={() => handleTabChange('/circular-resolution')}>
          Circular Resolution
        </Button>
        <Button component={Link} to="/template-group" onClick={() => handleTabChange('/template-group')}>
          Template Group
        </Button>
      </Box>
    </Box>
  );
};

export default Menu;
