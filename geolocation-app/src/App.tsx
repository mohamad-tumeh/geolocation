import React from 'react';
import GeolocationForm from './components/GeolocationForm'; 
import { Container, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Geolocation App
      </Typography>
      <GeolocationForm />
    </Container>
  );
};

export default App;
