import React from 'react';
import {renderRoutes} from 'react-router-config';
import route from "./routes/index";
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/index'
function App(props) {
    return <Provider store={store}>
        <HashRouter>
            {renderRoutes(route)}
        </HashRouter>
    </Provider>
    
}

export default App;


