import { useState } from 'react';
import PropTypes, { func } from 'prop-types';

//cuando se hace un cambio en el estado en el componente toca indicar a react que hubo un cambio para que redibuje los cambios.


export const CounterApp2 = ( { valor } ) => {

    //el valor del estado inicial  es 0 
    //cuando llamamos a setCounter  le estamos indicando a react que el estado cambio por consecuensia se debe eejcutar el componente nuevamente.
    // la segunda forma para cambiar 

    const [ counter, setCounter ] = useState( valor );

    const  handleAdd = ( ) =>{ 

        //setCounter ( counter + 1 ); primera forma para obtener el valor del counter

        setCounter( counter + 1 ) //segunda forma para obeter el valor del counter
    } 

    const handleRestar = ()  => setCounter( counter -1 );
    const handleReset = ()  => setCounter( valor );

 

  return (

    <>
        <div>CounterApp2</div>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> +1 </button> 
        <button onClick={ handleRestar }> -1 </button>
        <button onClick={ handleReset }> Reset </button>



    </>
    
  );
}

CounterApp2.propTypes = {
    valor: PropTypes.number.isRequired
}


