import { useState } from "react";
import { Product, SpanProduct, Button, ButtonS } from "./styles/Styles";
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
  
  const [stock, setStock] = useState(stockJson);

  const [disable, setDisable] = useState(false);

  const buttonText = () => {
    return stock === 0 ? <ButtonS>SIN STOCK</ButtonS> : "COMPRAR";
  };

  const onClick = () => {
    add();
    setStock((prevState) => prevState - 1);
    if (stock === 1) {
      setDisable(true);
    }
  };

  const addSpan = () => {
    return stock === 0 ? <SpanProduct>agotado</SpanProduct> : `${stock}`;
  };

  return (
    <Product>
      <h3>{name}</h3>
      <p>{description}</p>
      <img src={img} alt="imagen del producto" />
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
