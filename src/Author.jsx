import React,{Component} from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <Father b={999999999999} render={props=><Son authorRole={props}/>} />
        </div>
    );
}


class Son extends Component{
    constructor(props) {
        super(props);
        console.log(props,9999)
    }
    render() {
        let {authorRole}  = this.props;
        let isAdmin = authorRole=='admin';
        function renderUI(){
            let result = null;
            if(isAdmin){
                result="管理员"
            }else{
                result="凡人"
            }
            return result
        }
        return <div>
            {renderUI()}
        </div>
    }
}



class Father extends Component{
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        authorRole:"admin"
    }
    render(){

        return <div>6666
            {this.props.render(this.props.authorRole)}
        </div>
    }
}



export default App;
