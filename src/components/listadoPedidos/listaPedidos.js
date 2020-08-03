import React, { useEffect, useState, Fragment } from "react";
import DetallePedido from "./detallePedido";
import {productoServido} from '../../firebase/firestore'

const ListaPedidos = ({ pedidos, esCocina }) => {
    const listaPedidos = pedidos;
  return (
    <Fragment>
            {listaPedidos.map((pedido) => (
                <section key={pedido.numero.toString()}> 
                    <section>
                        <section>N° {pedido.numero}</section>
                        <section>N° de Mesa: {pedido.mesa}</section>
                        <DetallePedido detalle={pedido.detalle} esCocina={esCocina} idPedido = { pedido.id} />
                    </section>
                    <button onClick={() => {productoServido(pedido.id)}}>ENTREGADO</button>
                </section>
            ))}
    </Fragment>
  );
};

export default ListaPedidos;