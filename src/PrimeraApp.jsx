//Cuando se quiera agrupar dentro un div varios elementos uno debajo de otro
//<> esto es un fragmento
//PROPTYPES - tipos de propiedades

import PropTypes from 'prop-types';

export const PrimeraApp = ({ 
    title,
    subTitle }) => {

    

  return (
    <> 
        <h1>{ title }</h1>
        {/* <code> { JSON.stringify( newMessage ) } </code> */}
        <p> {subTitle} </p>
    </>
  )

}

PrimeraApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}

PrimeraApp.defaultProps = {
    title: 'No hay titulo'
}