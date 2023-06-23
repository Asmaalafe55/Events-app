import axios from 'axios';
// import { config } from 'dotenv';
// config();
const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default Axios;
