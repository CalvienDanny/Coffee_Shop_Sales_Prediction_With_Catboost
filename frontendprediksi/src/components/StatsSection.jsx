import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const StatCard = ({ title, value, change, color }) => {
  return (
    <Paper sx={{ padding: '20px' }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Typography variant="h5">{value}</Typography>
      <Typography color={color}>{change}</Typography>
    </Paper>
  );
};

const StatsSection = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <StatCard title="Today's Money" value="$53k" change="+55% than last week" color="green" />
      </Grid>
      <Grid item xs={3}>
        <StatCard title="Today's Users" value="2,300" change="+3% than last month" color="green" />
      </Grid>
      <Grid item xs={3}>
        <StatCard title="New Clients" value="3,462" change="-2% than yesterday" color="red" />
      </Grid>
      <Grid item xs={3}>
        <StatCard title="Sales" value="$103,430" change="+5% than yesterday" color="green" />
      </Grid>
    </Grid>
  );
};

export default StatsSection;
