import React, { useEffect, useState, Fragment } from 'react';
import Cabecera from '../components/cabeceraMesero'
import {obtenerPedidosMesero} from '../firebase/firestore'
import ListaPedidos from '../components/listadoPedidos/listaPedidos'

const Page3 =()=> {

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
            <ListaPedidos pedidos={dataPedidos}  esCocina = 'false'/>
          </Fragment>
    )
    
 }

export default Page3
// import React from 'react'
// import Cabecera from '../components/cabeceraMesero'
// import PedidoEstado from '../components/PedidoEstado'
// import db from '../conexionFirebase';

// class Page3 extends React.Component {
//     constructor(props){
//         super(props);
//         this.state= {           
//             pedido: [],
//         }
//     }
//     componentDidMount(){
//         db.collection('pedidos').get().then((snapShots) => {
//             this.setState({
//                 pedido: snapShots.docs.map(doc => {
//                     console.log(doc.id)
//                     console.log(doc.data())
//                     return {id: doc.id, data: doc.data()}
//                 })
//             })
//         console.log(this.state.pedido)    
//         })
        
//     }
//     render(){
//         return (
//             <div>
//                 <div><Cabecera/></div>
//                 <div>
//                     {
//                         this.state.pedido.map((item, key) => {
//                             return (
//                                 <div id={key}>
//                                     <section>
//                                         <p>N° {key+1}</p>
//                                         <p>N° de mesa: {item.data.numeroMesa}</p>
//                                     </section>
//                                     <section>
//                                         <table>
//                                             <tbody>
//                                                 <tr>
//                                                     <td></td>
//                                                     <td></td>
//                                                     <td>Preparado</td>
//                                                     <td>Servido</td>
//                                                 </tr>
//                                                     {
//                                                        iterarPedidos(item.data.pedidos) 
//                                                     } 
//                                             </tbody>
//                                         </table>
//                                         <button>ENTREGADO</button>
//                                     </section>
//                                 </div>
//                             );   
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
//  }

// export default Page3