import React from 'react';
import {renderRoutes} from 'react-router-config'

const Index = function (props){
    const { route } = props
    console.log(99999999999,renderRoutes(route.routes))
    return <div>
        <h1>AdminLayout</h1>
        {renderRoutes(route.routes)}
    </div>
}

export default Index;
