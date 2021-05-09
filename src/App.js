import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

const [productos, setProductos] = useState([
  {id:1, nombre:"Camisa", precio: 12},
  {id:2, nombre:"Pantalón", precio: 25},
  {id:3, nombre:"Gorra", precio: 8},
  {id:4, nombre:"Calcetines", precio: 6},
]);

const [ carrito, agregarProducto  ] = useState([]);

const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo = "Hola a todos"
        numero = {20}
      />

      <h1>Listado de productos</h1>
      {productos.map(producto =>(
        <Producto 
          key={producto.id} 
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
