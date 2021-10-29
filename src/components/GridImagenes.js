
import React/* , { useState, useEffect } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GridImagen from './GridImagen';

const GridImagenes = ( { cat } ) => {
  
  // const [ listImgs, setListImgs ] = useState( [] );

  // // El useEffect servirá para que se ejecute la función sólo cuando se carga el componente
  // useEffect( () => {
  //   getGifs( cat )
  //     .then( imgs => setListImgs( imgs ) ) // lo mismo : .then( setListImgs )
  // }, [ cat] );

  const { data:imagenes, loading } = useFetchGifs( cat );


  // La función getGifs se fue a helpers/getGifs.js

  return (
    <>
      <h3>{ cat }</h3>

      { loading && <p>Cargando...</p> }

      <div className="card-grid">
        {
        imagenes.map( img => (
          <GridImagen
            key={ img.id }
            // Atención : se envía el objeto 'img' con el operador Spread
            { ...img } />
         ) )
        }
      </div>
    </>
  )
}

export default GridImagenes;
