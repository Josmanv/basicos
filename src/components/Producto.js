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

const eliminarProducto = id => {
    const productos = carrito.filter(producto => producto.id !== id);
    agregarProducto(productos);

}

    return(
        <div>
        <p>{nombre} - Precio: {precio}</p>
        
        {productos 
        ?
            <button
                type="button"
                onClick={()=> seleccionarProducto(id)}
            >Añadir al carro</button>
        :
            <button
                type="button"
                onClick={()=> eliminarProducto(id)}
            >Eliminar Producto</button>
        }
        </div>
    )}
 
export default Producto;
