import axios from 'axios';
const API_KEY = "d8dc1e463cf1a5844bbc4626b2f56fa0";
const API_URL = 'https://api.themoviedb.org/3';

const authenticate = async (): Promise<string> => {
  const response = await axios.get(`${API_URL}/authentication/token/new?api_key=${API_KEY}`);
  const requestToken = response.data.request_token;
  const redirectUrl = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:3000/`;
  return redirectUrl;
};

const getSessionId = async (requestToken: string): Promise<string> => {
  const response = await axios.post(`${API_URL}/authentication/session/new?api_key=${API_KEY}`, {
    request_token: requestToken,
  });
  return response.data.session_id;
};

const getAccountDetails = async (sessionId: string): Promise<any> => {
  const response = await axios.get(`${API_URL}/account?api_key=${API_KEY}&session_id=${sessionId}`);
  return response.data;
};

export { authenticate, getSessionId, getAccountDetails };