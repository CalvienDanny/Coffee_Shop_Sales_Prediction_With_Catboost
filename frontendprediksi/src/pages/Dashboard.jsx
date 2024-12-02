import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsSection from './StatsSection';
import ChartsSection from './ChartsSection';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: '20px' }}>
        <Header />
        <StatsSection />
        <ChartsSection />
      </Box>
    </Box>
  );
};

export default Dashboard;
