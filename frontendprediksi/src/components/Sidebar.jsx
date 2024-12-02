import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const Sidebar = () => {
  return (
    <Box sx={{ width: '250px', bgcolor: 'primary.dark', height: '100vh', color: '#fff', padding: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Material Tailwind React
      </Typography>
      <List>
        <ListItem button>Dashboard</ListItem>
        <ListItem button>Profile</ListItem>
        <ListItem button>Tables</ListItem>
        <ListItem button>Notifications</ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
