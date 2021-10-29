
export const getGifs = async ( cat ) => {

  // URL creada con PostMan con la información de Giphy
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( cat ) }&limit=10&api_key=Qw2H1f20DXilRsLWQa3PJlJHjyTy25Fl`;
  const respuesta = await fetch( url );
  const { data:datos } = await respuesta.json();

  // console.log( datos );

  const imagenes = datos.map( e => ( {
          id : e.id,
          titulo : e.title,
          url : e.images.downsized_medium.url
        } ) );
  
  return( imagenes );

  // setListImgs( imagenes );

}
