import React from 'react';
import './carrito.css'
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => (
    <div className="carrito">
        <h2>Tu carrito de compras</h2>

        {carrito.length === 0
        ?
            <h2>No hay elementos</h2>
        : 
            carrito.map(producto => {
                return(
                <Producto
                    key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                />
                )
            })
        }
    </div>
)
 
export default Carrito;