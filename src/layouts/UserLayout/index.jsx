import React from 'react';
import {renderRoutes} from 'react-router-config'
const Index = function (props){
    const { route} = props
    return <div>
        <h1>UserLayout</h1>
        {renderRoutes(route.routes)}
    </div>
}
export default Index;