import React from 'react';
import './styles/contenedorProducto.css';

const Producto = ({ ImageProducto, nombreProducto, precioProducto, idProducto, click }) => {
    return (
        <button className='contenedorProductoUno' id={idProducto} onClick={click}>
            <div className='contenedorComida'>
                <img className='imagenProducto' src={ImageProducto} alt={nombreProducto}/>
            </div>
            <div className='contenedorNombre'><p className='nombre'>{nombreProducto}</p></div>
            <div className='contenedorPrecio'><p className='precio'>S/ {precioProducto}</p></div>
        </button>
    )
}

export default Producto