import axios from 'axios'

export const AxiosInit = axios.create({
    baseURL: 'http://localhost:8000/api/'
})

AxiosInit.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    config.headers.Authorization = token

    return config;
})

export const GetProductList = async () => {
    const response = await AxiosInit.get('shop/')

    try {        
        return response
    } catch(err) {
        return response
    }
}