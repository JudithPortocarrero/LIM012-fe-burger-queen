import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraCocinero'
import {obtenerPedidosCocina} from '../firebase/firestore'
import ListaCard from '../components/listadoCocinero/listaCard'

const Page5 =()=> {
   const [dataPedidos, setdataPedidos] = useState([]);
    
      useEffect(() => {
        obtenerPedidosCocina((data)=> {
          console.log(data);
          setdataPedidos(data);
        });  
         
      }, []); 
   

        return (
          <Fragment>
            <Cabecera/>              
            <ListaCard pedidos={dataPedidos}/>
          </Fragment>
        )    

   
 }

export default Page5


