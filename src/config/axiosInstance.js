import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org'
const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;

export default axiosInstance;