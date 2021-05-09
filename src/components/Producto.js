import React from 'react';

const Producto = ({producto}) => {

const {nombre, precio, id} = producto;

    return(
        <div>
        <p>{nombre} - Precio: {precio}</p>
        </div>
    )}
 
export default Producto;
