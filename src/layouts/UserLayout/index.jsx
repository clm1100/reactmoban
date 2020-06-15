import { React } from 'react';
import {route} from '../../routes/index';
import {renderRoutes} from 'react-router-config'
const Index = function ({routes}){
    return <div>
        <h1>UserLayout</h1>
        {renderRoutes(routes)}
    </div>
}

export default Index;
