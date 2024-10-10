import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import { fetchGeolocation } from '../api/api';
import ResultDisplay from './ResultDisplay'; 

const GeolocationForm: React.FC = () => {
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    try {
      const data = await fetchGeolocation(address, email);
      setResult(data);
      setOpenSnackbar(true); 
    } catch (err: any) {
      setError(err.response?.data?.error || 'An error occurred');
      setOpenSnackbar(true); 
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Find Geolocation
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Enter your address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          margin="normal"
        />
        <TextField
          fullWidth
          label="Enter your email (optional)"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Get Geolocation
        </Button>
      </form>
      
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity={error ? 'error' : 'success'}>
          {error ? error : `Geolocation: ${result?.lat}, ${result?.lng}`}
        </Alert>
      </Snackbar>

      {result && <ResultDisplay result={result} />}
    </Container>
  );
};

export default GeolocationForm;
