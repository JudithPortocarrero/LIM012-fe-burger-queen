import React from 'react'
import './styles/ordenPedidos.css'

const OrdenPedidos = ({idcontenedor, Increment, Decrement, counter, nombre, precio }) => {
    return (
        <tr>
            <td className='controladorContador'>
                <button id={idcontenedor} className='add-button' type='button' onClick={Increment}>+</button>
                <p>{counter}</p>
                <button id={idcontenedor}  className='add-button' type='button' onClick={Decrement}>-</button>
            </td>
            <td>{nombre}</td>
            <td className='contPrecio'>{precio}</td>
        </tr>
    );
}
export default OrdenPedidos;