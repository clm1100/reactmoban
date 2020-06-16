import React, { useState, useEffect, Component, useRef} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import { axiosInstance} from '../../api/config'
window.arr1 = [];
window.arr2 = [];
window.arr3 = [];

const Index = function (){
    let [a,setA] = useState('')
    let [arr,setArr] = useState('')
    const [source1,setSource1] = useState('');
    const countPlusThree = ()=>{
        setA(a+1);
        setTimeout(() => {
            console.log(a)
        }, 500);
    }
    useEffect(()=>{
        var CancelToken = axios.CancelToken;
        var source = CancelToken.source();
        axios.get("https://cnodejs.org/api/v1/topics", { cancelToken: source.token}).then(data=>{
            setArr(data)
        }).catch(e=>{
            console.log(e)
        })
        return ()=>{
            console.log("quxiaole")
            source.cancel()
        }
    },[])
    window.arr1.push(countPlusThree)
    const numRef = useRef(a);
    numRef.current = a;
    window.arr3.push(numRef)
    return <div>
        <p>{} has clicked  <strong>{a}</strong> Times </p>
        <Link to={'/admin/list/clock'}>首页</Link>
        <button onClick={countPlusThree}>Click*3</button>
    </div>
}

 class Two extends Component{
    constructor(props){
        super(props)
        var CancelToken = axios.CancelToken;
        var source = CancelToken.source();
        this.source = source;
        this.state = {
            a:110,
            arr:'',
            ...source
        }
    }
    countPlusThree=()=> {
        let {token} = this.state
        console.log("penging...")
        axios.get("https://cnodejs.org/api/v1/topics", { cancelToken: token }).then(data => {
            this.setState({
                arr:data
            })
            console.log(data);
        }).catch(e => {
            console.log(e)
        })
     }
     componentWillUnmount(){
         const {cancel} = this.state;
        //  cancel("销毁了")
     }
    render(){
        window.arr2.push(this.countPlusThree)
        let {a} = this.state
        return <div>
            <p>{} has clicked  <strong>{a}</strong> Times </p>
            <button onClick={this.countPlusThree}>Click*3</button>
            <Link to={'/admin/list/clock'}>首页</Link>
        </div>
    }
}


let App = function(){
    return <div>
        <Index></Index>
        <Two></Two>
    </div>
}

export default App;
