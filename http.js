import axios from 'axios';


const axiosInstance = axios.create({
    baseURL:'http://localhost:8000',
    headers:{
        'Content-type':'application/json'
    }
})

export default axiosInstance;