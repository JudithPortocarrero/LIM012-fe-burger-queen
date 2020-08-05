import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraMesero'
import {obtenerPedidosMesero} from '../firebase/firestore'
import ListaPedidos from '../components/listadoPedidos/listaPedidos'
import './Page3.css'

const Page3 = () => {
    const [dataPedidos, setdataPedidos] = useState([]);
    
    useEffect(() => {
        obtenerPedidosMesero((data)=> {
            console.log(data);
            setdataPedidos(data);
      });   
    }, []); 

    return (
        <div className='contenedorHistorialPedidos'>
            <Cabecera/>
            <div className='contenedorListaHistorial'>
                <ListaPedidos pedidos={dataPedidos}/>
            </div>              
        </div>
    ) 
 }

export default Page3;
