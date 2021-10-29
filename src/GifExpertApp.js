
// Estructura de Archivos : https://es.reactjs.org/docs/faq-structure.html
// Structuring projects and naming components in React : https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

import React, { useState } from 'react';
import AgregarCategoria from './components/AgregarCategoria';
import GridImagenes from './components/GridImagenes';

const GifExpertApp = () => {

  const [ categorias, setCategorias ] = useState( [ 'Puppies' ] );

  /* 
  const handleAgregarCategoria = ( e ) => {

    if( categorias.find( e => e === 'Nuevo Elemento' ) ){ return false; }

    setCategorias( [ ...categorias, 'Nuevo Elemento' ] );
    
    // Otra opción, en donde utilizamos el 'callback function' :
    // setCategorias( c => [ ...c, 'Nuevo Elemento' ] );

    // Una forma extendida que hace lo mismo
    // let newCats = [...categorias]; // = categorias.map( c => c ); = categorias.slice(); = [].concat( categorias );
    //     newCats.push( 'Nuevo Elemento' );
    // setCategorias( newCats );

  }
 */
  
  return (
    <>
      <h2>GifExpertApp</h2>
      {/* Enviamos la función para agregar categorías al componente */}
      <AgregarCategoria setCats={ setCategorias } cats={ categorias } />
      <hr />
      {
        // El 'key' del list item no debe ser el índice en el Array
        categorias.map( c => (
            <GridImagenes
              key={ c }
              cat={ c } />
          ) )
      }
      {/* <button onClick={ handleAgregarCategoria }>Agregar Categoría</button> */}
    </>
  )

};

export {
  GifExpertApp as default
}
