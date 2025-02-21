import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeraApp } from './PrimeraApp.JSX';
//import { HolaMundo }  from './HolaMundo';





//para renderizar la aplicacion realizamos lo siguiente

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <PrimeraApp />
    </React.StrictMode>
);

