import axios from "axios";

const getAxiosInstance = (baseURL: string) => axios.create({ baseURL, headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }, });

export default getAxiosInstance