import axios from 'axios'
import { toast } from 'react-toastify'

export const AxiosInit = axios.create({
    baseURL: import.meta.env.VITE_URL,
})

AxiosInit.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    config.headers.Authorization = token

    return config;
})

export const AuthLogin = async (requestData) => {
    const response = await toast.promise(
        AxiosInit.post('auth/jwt/create/', requestData),
        {
            pending: 'Checking',
            success: "You're Logged",
            error: 'Incorrect username or password'
        }
    )

    try {
        return response
    } catch (err) {
        return response
    }
}

export const AuthRegister = async (requestData) => {
    const response = await AxiosInit.post('auth/register/', requestData)

    try {
        return response
    } catch (err) {
        return response
    }
}

export const CheckStatusServer = async () => {
    const response = await AxiosInit.get('status/')

    try {
        return response
    } catch (err) {
        return response
    }
}

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

export const GetCategoryList = async () => {
    const response = await AxiosInit.get('category-list/')

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

export const GetReviewProduct = async (id) => {
    const response = await AxiosInit(`review-list/${id}`)

    try {
        return response
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
        return response;
    } catch(err) {
        return response
    }
}