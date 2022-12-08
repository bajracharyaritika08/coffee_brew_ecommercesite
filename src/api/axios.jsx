import axios from 'axios';
import { BASE_URI } from "./url";
export const ApiRequest = axios.create({
    baseURL: BASE_URI,
});