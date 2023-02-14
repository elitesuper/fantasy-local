import axios from "axios";

const getAxiosInstance = (baseURL: string) => axios.create({ baseURL });

export default getAxiosInstance