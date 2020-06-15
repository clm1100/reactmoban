import {axiosInstance} from './config';

export const getasks = ()=>{
    return axiosInstance.get('/topics?tab=ask');
}

export const getGoods = ()=>{
    return axiosInstance.get('/topics?tab=good')
}