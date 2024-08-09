import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Bootstrap from './Bootstrap';
// Bootstrap
function App(){
  return(
    <>
    <Bootstrap/>
    </>
  )
}

export default App;


// API
// import React, {useEffect, useState} from 'react';

// const ImagenPerro = ({imagen}) =>{
//   return(
//     <div>
//       <img src={imagen} alt="imagen de perro" />
//     </div>
//   )
// }

// const App = () =>{
//   const [imagenes, setImagenes] = useState('');

//   useEffect(() =>{
//     const ObtenerImagenesPerro = async () =>{
//       try{
//         const respuesta = await fetch('https://dog.ceo/api/breeds/image/random');
//         const datos = await respuesta.json();
//         setImagenes(datos.message);
//         }catch(error){
//           console.log(error);
//           console.error('Error al obtener imagenes')
//       }
//     }
//     ObtenerImagenesPerro();
//   }, [])

//   return(
//     <div>
//       <ImagenPerro imagen={imagenes} />
//     </div>
//   )
// }