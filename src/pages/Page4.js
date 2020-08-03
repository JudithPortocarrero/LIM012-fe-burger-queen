import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraMesero'
import {obtenerPedidosMesero} from '../firebase/firestore'
import ListaHistorial from '../components/historialPedidos/lista'

const Page4 =()=> {

    const [dataPedidos, setdataPedidos] = useState([]);
    
    useEffect(() => {
        obtenerPedidosMesero((data)=> {
        console.log(data);
        setdataPedidos(data);
      });  
       
    }, []); 

    return (
            <Fragment>
            <Cabecera/>              
            <ListaHistorial pedidos={dataPedidos}/>
          </Fragment>
    )
    
 }

export default Page4