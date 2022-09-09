import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3000/v1/",
    headers: {
        'Content-Type': 'application/json'
    },
    //withCredentials: true,
})
export default instance;