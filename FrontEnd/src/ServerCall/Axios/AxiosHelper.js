import axios from "axios";


export const BASE_URL = 'http://localhost:9090/api/';


export const MYAXIOIS = axios.create(
    {
        baseURL: BASE_URL

    }
);

