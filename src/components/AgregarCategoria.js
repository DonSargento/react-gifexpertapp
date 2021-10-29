
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AgregarCategoria = ( { setCats, cats } ) => {

  const [ inputValue, setInputValue ] = useState( '' );
  
  const handlerChangeValue = ( e ) => {
    setInputValue( e.target.value );
  };
  
  const handlerSubmitValue = ( e ) => {
    
    // Evaluamos si ya existe el valor en el array
    if( inputValue.trim().length > 0 && !cats.find( v => v === inputValue ) ){
      // Agregamos el valor al Array de categorías
      setCats( c => [ inputValue.trim(), ...c ] );
    }

    setInputValue( '' ); // limpiamos el valor del input

  };

  return (
    <>
      <input
        id="inputCategoria"
        type="text"
        value={ inputValue }
        onChange={ handlerChangeValue }
      />
      <button
        type="button"
        onClick={ handlerSubmitValue }
      >Aceptar</button>
    </>
  )
}

AgregarCategoria.propTypes = {
  setCats : PropTypes.func.isRequired,
  cats : PropTypes.array.isRequired
}


export default AgregarCategoria
