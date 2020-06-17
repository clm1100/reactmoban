import React, { Component } from 'react';

function Index(props={name:'张三',age:"18"}) {
    console.log(props);
    const {name,age} = props;
    return <div>
        {name}||{age}
    </div>
}


export default Index;
