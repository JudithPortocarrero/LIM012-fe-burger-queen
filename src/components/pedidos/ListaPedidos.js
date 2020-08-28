import React, { Fragment } from "react";
import DetallePedido from "./DetallePedido";
import {productoServido} from '../../firebase/firestore'
import './ListaPedidos.scss';

const formatoFecha = (time) => {
  let date = new Date(time);
  return date.toLocaleString();
}

const intervaloTiempo = (date1,date2) => {
  let date1_ms = date1.getTime();
  let date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  let difference_ms = date2_ms - date1_ms;
  //take out milliseconds
  difference_ms = difference_ms/1000;
  let seconds = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  let minutes = Math.floor(difference_ms % 60);
  difference_ms = difference_ms/60; 
  let hours = Math.floor(difference_ms % 24);  
  // let days = Math.floor(difference_ms/24);
  
  return  hours + ' H, ' + minutes + ' M '+ seconds + ' S';
}

const ListaPedidos = ({ pedidos, esHistorico }) => {
    console.log(esHistorico);
    return (
        <div className='contenedorCards'>
            {pedidos.map((pedido, key) => (
                <section className='cardEstadoPedido' key={key}>
                    <section className='contenedorCardEstadoPedido'>
                      <center className='tituloNroOrden'><strong>Orden N° {pedido.numero}</strong></center>
                      <p className='tituloNroMesa'>N° de Mesa: {pedido.mesa}</p>
                      <DetallePedido detalle={pedido.detalle}  idPedido={pedido.id} esHistorico={esHistorico} />
                    </section>
                    <button className='btnEntregado' onClick={()=>{productoServido(pedido.id)}}>ENTREGADO</button>
                </section>
            ))}
        </div>
    );
};

export default ListaPedidos;