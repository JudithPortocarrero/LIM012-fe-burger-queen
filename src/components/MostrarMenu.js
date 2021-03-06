import React from 'react'
import Producto from './contenedorProducto'
import './styles/mostrarMenu.scss'

const MostrarMenu = ({ tipoDeProducto, menu, onClick }) => (
    <div className='contenedorProducto'>
        {
            menu && menu !== undefined ? menu.map((item,key) => {
                if (item.data.tipo === tipoDeProducto) {
                    return(
                        <Producto key={key}
                            click={onClick}
                            idProducto={item.id}
                            ImageProducto={item.data.imgProducto}
                            nombreProducto={item.data.nombreProducto}
                            precioProducto={item.data.precioProducto}
                        />                              
                    );
                }   
            }):null
        }
    </div>
);         

export default MostrarMenu;
