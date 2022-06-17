import { useState } from "react";
import {Product, SpanProduct, Button, ButtonS} from "./styles/Styles"
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({ name, description, img, stockJson, add }) {
  //El número de stock se lo define el padre a través del archivo json.
  const [stock, setStock] = useState(stockJson);

  //Se define un Estado para deshabilitar botón de "comprar" cuando el contador de stock llega a 0.
  const [disable, setDisable] = useState(false);

  // Cuando el stock llega a 0 se modifica en el botón de comprar el texto: de "comprar" a "sin stock".
  const buttonText = () => {
    return stock === 0 ? <ButtonS>SIN STOCK</ButtonS> : "COMPRAR";
  };

  //Se crea función para definir en el onClick del botón:
  //conteo de stock y deshabilitación del botón cuando el stock llega a 0 (agotado).

  const onClick = () => {
    add();
    setStock((prevState) => prevState - 1);
    if (stock === 1) {
      setDisable(true);
    }
  };

  //Con el stock en 0 se agrega etiqueta span con la palabra "agotado" para que se modifique al estilo correspondiente (en rojo).
  const addSpan = () => {
    return stock === 0 ? <SpanProduct>agotado</SpanProduct> : `${stock}`;
  };

  return (
    <Product>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={img} alt= "imagen del producto"/>
      <h5>En stock:{addSpan()}</h5>
      <Button
        disabled={disable}
        onClick={() => {
          onClick();
        }}
      >
        {buttonText()}
      </Button>
    </Product>
  );
}
