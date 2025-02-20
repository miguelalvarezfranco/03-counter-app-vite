import React from 'react'
import ReactDOM from 'react-dom/client';

//esto de abajo es una funcional component
function App () {
    //document.createElement....
    return <h1>Hola mundo..!!</h1>
}

//para renderizar la aplicacion realizamos lo siguiente

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

