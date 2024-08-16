import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ handleTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/circular-resolution', label: 'Circular Resolution' },
    { path: '/template-group', label: 'Template Group' },
  ];

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <List>
          {routes.map((route, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={route.path}
              onClick={() => {
                handleTabChange(route.path);
                toggleDrawer();
              }}
            >
              <ListItemText primary={route.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
