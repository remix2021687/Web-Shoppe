import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const AxiosInit = axios.create({
    baseURL: import.meta.env.VITE_URL
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

export const GetProductInfo = async (id) => {
    const response = await AxiosInit.get(`shop/${id}`)

    try {
        return response
    } catch(err) {
        return response
    }
}

export const GetProductPriceList = async () => {
    const response = await AxiosInit.get('product-price/')

    try {
        return response
    } catch(err) {
        return response
    }
}

export const GetProductListPagination = async () => {
    const response = await AxiosInit.get('shop-list-page/')

    try {
        return response
    } catch(err) {
        return response
    }
}

export const GetShopList = async () => {
    const response = await AxiosInit.get('shop-list/')

    try {
        return response;
    } catch(err) {
        return response
    }
}

export const PostReviewProduct = async (requestData) => {
    const response = await toast.promise(
        AxiosInit.post('review/', requestData),
        {
            pending: 'Loading',
            success: 'Posted !',
            error: 'Not Posted'
        }
    )
    
    try {
        setTimeout(() => {
            location.reload();
        }, 3500)
        return response;
    } catch(err) {
        return response
    }
}