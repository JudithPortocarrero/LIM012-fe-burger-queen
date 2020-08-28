import React from "react";
import DetalleCocina from "./DetalleCocina";
import {productoPreparado} from '../../firebase/firestore'
import './ListaCocina.scss'

const formatoFecha = (time) => {
  let date = new Date(time);
  return date.toLocaleString();
}

const intervaloTiempo = (date1,date2) => {
  //Get 1 day in milliseconds
  let one_day=1000*60*60*24;
  // Convert both dates to milliseconds
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
  let days = Math.floor(difference_ms/24);
  
  // return days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, and ' + seconds + ' seconds';
  return  hours + 'H ' + minutes + 'M ' + seconds + 's' ;
}

const ListaCocina = ({ pedidos, esHistorico }) => {
  return (
        <div className='contenedorCardCocinero'>
          {pedidos.map((pedido) => (
            <section className='cardCocinero' key={pedido.numero.toString()}>
                <section >
                  <center className='tituloNroOrden'><strong>Orden N° {pedido.numero}</strong></center>
                  <DetalleCocina detalle={pedido.detalle} idPedido = { pedido.id} esHistorico = {esHistorico} />
                </section>
                <button className='btnPedidoTerminado' onClick={()=>{productoPreparado(pedido.id)}}>PEDIDO TERMINADO</button>
            </section>
          ))}
        </div>
  );
};

export default ListaCocina;