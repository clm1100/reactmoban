import React, { useState, useEffect } from 'react';
import {renderRoutes} from 'react-router-config';
import route from "./routes/index";
function App(props) {
    
    return <div>
        {renderRoutes(route)}
    </div>
}

export default App;