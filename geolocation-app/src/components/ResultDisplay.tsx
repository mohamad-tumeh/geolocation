import React from 'react';
import { Paper, Typography } from '@mui/material';

interface ResultProps {
  result: {
    lat: number;
    lng: number;
  };
}

const ResultDisplay: React.FC<ResultProps> = ({ result }) => {
  return (
    <Paper style={{ padding: '16px', marginTop: '16px' }}>
      <Typography variant="h6">Geolocation:</Typography>
      <Typography>Latitude: {result.lat}</Typography>
      <Typography>Longitude: {result.lng}</Typography>
    </Paper>
  );
};

export default ResultDisplay;
