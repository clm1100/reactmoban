import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from './store/actionCreaters'
const Index = function (props){
    const {askslist,goodslist} = props;
    const {getaskslist,getgoodslist} = props;
    useEffect(()=>{
        getaskslist();
        getgoodslist();
        
    },[])
    const askslistJS = askslist ? askslist.toJS():{};
    const {data:askdata} = askslistJS

    const goodslistJS = goodslist ? goodslist.toJS():{};
    const { data: gooddata } = goodslistJS

    return <div>
        AdminClockList{askdata && askdata.length} ||{gooddata && gooddata.length}
    </div>
}

const mapStateToProps = (state)=>{
    return {
        askslist: state.getIn(['adminclocklist','asks']),
        goodslist: state.getIn(['adminclocklist', 'goods'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        getaskslist(){
            dispatch(actionTypes.asyncChangeAsks())
        },
        getgoodslist(){
            dispatch(actionTypes.asyncChangeGoods())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Index));
