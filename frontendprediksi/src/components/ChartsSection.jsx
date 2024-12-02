import React from 'react';
import { Line } from 'react-chartjs-2';
import { Paper, Typography } from '@mui/material';

const data = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      label: 'Website Views',
      data: [30, 10, 20, 15, 30, 25, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
    },
  ],
};

const LineChart = ({ title }) => {
  return (
    <Paper sx={{ padding: '20px' }}>
      <Typography variant="subtitle1">{title}</Typography>
      <Line data={data} />
    </Paper>
  );
};

const ChartsSection = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <LineChart title="Website Views" />
      </Grid>
      <Grid item xs={6}>
        <LineChart title="Daily Sales" />
      </Grid>
    </Grid>
  );
};

export default ChartsSection;
