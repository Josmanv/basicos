import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

const {nombre, precio, id} = producto;

const seleccionarProducto = (id) => {

    const producto = productos.filter(producto => producto.id === id )[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
}

    return(
        <div>
        <p>{nombre} - Precio: {precio}</p>
        <button
            type="button"
            onClick={()=> seleccionarProducto(id)}
        >Añadir al carro</button>
        </div>
    )}
 
export default Producto;
