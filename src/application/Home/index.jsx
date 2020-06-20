import React, { useState, useEffect, Component, useRef} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
const Index = function (){
    let [arr,setArr] = useState('');
    var CancelToken = axios.CancelToken;
    var source = CancelToken.source();
    let Click = ()=>{
        axios.get("https://cnodejs.org/api/v1/topics", { cancelToken: source.token }).then(data => {
            setArr(data.data.data);
            console.log("2222");
        }).catch(e => {
            console.log(e)
        })
    }
    useEffect(()=>{
        return ()=>{
            console.log("quxiaole")
            source.cancel()
        }
    },[])
    return <div>
        <p>{arr.length} </p>
        <button onClick={Click}>Click</button>
        <Link to={'/admin/list/clock'}>首页</Link>
    </div>
}

 class Two extends Component{
    constructor(props){
        super(props)
        // 1、调用axios.CancelToken.source()方法生成source实例;
        var CancelToken = axios.CancelToken;
        var source = CancelToken.source();
        this.state = {
            source,
            arr:''
        }
    }
    click=()=> {
        let { token } = this.state.source
        // 2、将source.token以cancelToken参数形式传入axios的请求中;
        axios.get("https://cnodejs.org/api/v1/topics", { cancelToken: token }).then(data => {
            this.setState({
                arr:data,
                loading:'加载完成'
            })
            console.log(data);
        }).catch(e => {
            console.log(e)
        })
     }
     componentWillUnmount(){
        //  3、在组件即将卸载时取消当前组件的所有异步任务
         const { cancel } = this.state.source;
         cancel("销毁了")
     }
    render(){
        let {a} = this.state
        return <div>
            <p>{} has clicked  <strong>{a}</strong> Times </p>
            <button onClick={this.click}>Click</button>
            <Link to={'/admin/list/clock'}>首页</Link>
        </div>
    }
}


class Three extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: ''
        }
    }
    click = () => {
        axios.get("https://cnodejs.org/api/v1/topics").then(data => {
            this.setState({
                arr: data.data,
            })
        }).catch(e => {
            console.log(e)
        })
    }
    render() {
        let {arr} = this.state;
        return <div>
            <p>{arr.length} </p>
            <button onClick={this.click}>Click</button>
            <Link to={'/admin/list/clock'}>首页</Link>
        </div>
    }
}


let App = function(){
    return <div>
        <Index></Index>
        <Two></Two>
        <Three></Three>
    </div>
}

export default App;




