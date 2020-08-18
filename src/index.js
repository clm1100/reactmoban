// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App.jsx';

// ReactDOM.render(
  
//     <App />,
//   document.getElementById('root')
// );

// // 1、引入redux,导出creatStore
// import { createStore,combineReducers,applyMiddleware ,compose} from 'redux';
// import thunk from 'redux-thunk';
// // 2、编写第一个reducer
// const objReducer = (state = { name: 'zs', age: 14 }, action) => {
//   switch (action.type) {
//     case 'addage':
//       state.age = action.payload.age;
//       return {...state};

//     default:
//       return state
//   }
// }
// // 3、编写第二个reducer
// const arrReducer = (state = [],action)=>{
//   switch (action.type) {
//     case 'add':
//       state.push(action.payload)
//       return [...state]
  
//     default:
//       return state
//   }
// }
// // 4、将所有reducer用combineReducers合并成一个reducers
// const reducers = combineReducers({
//   objReducer,
//   arrReducer
// })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // 5、调用createStore生成store
// // const store = createStore(reducers)
// // const store = createStore(reducers, applyMiddleware(thunk))
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
// // 6、调用store的subscribe方法监听事件
// store.subscribe(()=>{
//   console.log("disptach")
// })
// // 7、使用store的dispatch方法触发事件,并传入action
// function createAction(type, payload){
//   return {
//     type,
//     payload
//   }
// }
// // dispatch的参数是一个函数调用
// store.dispatch(createAction('addage',{age:9999}))
// store.dispatch(function(dispatch,getState){
//   setTimeout(() => {
//     dispatch({
//       type:'add',
//       payload:66666666
//     })
//   }, 3000);
// })
// // 8、调用store.getState方法获取store树的值
// setTimeout(() => {
//   console.log(store.getState());
// }, 4000);


import React,{memo} from "react";
import ReactDOM from 'react-dom';
class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [{
        body: '大三岁', author: '张三',arr:[]
      }, {
        body: '新冠病毒', author: '李四',arr:[]
      }]
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.state.commentList[0].arr.push(999)
      this.setState({ commentList: this.state.commentList})
    }, 1000)
  }

  render() {
    return (
      <div>
        {
          this.state.commentList.map((item, index) => {
            return <Comment {...item} key={index} />
          })
        }
      </div>
    )

  }
}

// 

function Comment(props) {
  console.log('渲染了', props)
  return <div>
    <p>{props.body}</p>
    <p>{props.author}</p>
    <p>{props.arr.length}</p>
  </div>
}


// Comment = memo(Comment)



// class Comment extends React.PureComponent {

//   constructor() {
//     super()
//   }
//   render() {
//     console.log('渲染了')
//     const props = this.props
//     return <div>
//       <p>{props.body}</p>
//       <p>{props.author}</p>
//     </div>
//   }
// }



ReactDOM.render(

  <CommentList />,
  document.getElementById('root')
);