
import React from 'react'

const GridImagen = ( { id, titulo, url } ) => {

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={ url } alt={ titulo } />
      <p>{ titulo }</p>
    </div>
  )
}

export default GridImagen
