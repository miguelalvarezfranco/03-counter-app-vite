import React from 'react';
import ReactDOM from 'react-dom/client';
//import { PrimeraApp } from './PrimeraApp';
import './styles.css';
//import { CounterApp } from './CounterApp';
import { CounterApp2 } from './CounterApp2';
//import { HolaMundo }  from './HolaMundo';






//para renderizar la aplicacion realizamos lo siguiente

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp2 valor={ 30 } />
    </React.StrictMode>
);




