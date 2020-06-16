import * as actionTypes from './constants';
import {fromJS} from 'immutable';
import {getasks,getGoods} from '../../../api/request'
export const changeAsks = (data)=>({
    type:actionTypes.CHANGE_ASKS,
    data:fromJS(data)
})

export const changeGoods = (data)=>({
    type:actionTypes.CHANGE_GOODS,
    data:fromJS(data)
})

export const asyncChangeAsks = (params)=>{
    return (dispatch)=>{
        getasks().then(data=>{
            dispatch(changeAsks(data))
        }).catch(err=>{
            console.log("出具传输错误")
        })
    }
}

export const asyncChangeGoods = (params)=>{
    return (dispatch)=>{
        getGoods().then(data=>{
            dispatch(changeGoods(data))
        }).catch(err=>{
            console.log("数据传输错误")
        })
    }
}