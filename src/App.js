import React, { useState, useEffect } from 'react';

function App(props) {
    const [isOnline, setIsOnline] = useState(null);
    let onClick = ()=>{
        setIsOnline(true)
        console.log("click")
    }
    useEffect(() => {

        console.log("123")
        return function cleanup() {
            console.log("执行clean")
        };
    });

    if (isOnline === null) {
        return <div onClick={onClick}>1111</div>
    }

    return isOnline ? <div onClick={onClick}>1111</div> : <div onClick={onClick}>22222</div>;
}

export default App;
