import React from 'react'
import {Header, SpanHeader} from "./styles/Styles"

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {
  
  return (
    <Header>

      <h1>Carrito de compras</h1>
      <p>Cantidad de productos <SpanHeader>{props.stock}</SpanHeader></p>  
      
    </Header>
  )
}
