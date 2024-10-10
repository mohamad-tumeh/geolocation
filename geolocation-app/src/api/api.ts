import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchGeolocation = async (address: string, email?: string) => {
  const response = await axios.post(`${API_URL}/geolocation`, {
    address,
    email,
  });
  return response.data;
};
