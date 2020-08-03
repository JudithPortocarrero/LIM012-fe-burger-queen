import React from 'react'
import Cabecera from '../components/cabeceraMesero'
import Show from '../components/show'
import db from '../conexionFirebase';
import './Page2.css'
import OrdenPedidos from '../components/ordenPedidos';

class Page2 extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            Menu: [],
            tipoProducto: 'desayuno',
            nombreCli: '',
            numeroMesa: '',            
            pedido: [],
            precioTotal: 0
        }
    }
    componentDidMount(){
        db.collection('menu').get().then((snapShots) => {
            this.setState({
                Menu: snapShots.docs.map(doc => {
                    return {id: doc.id, data: doc.data()}
                })
            })
        })
    }
    render(){
        const nombreChange = (e) => {
            this.setState({
                nombreCli: e.target.value,
            })
        }
        const mesaChange = (e) => {
            this.setState({
                numeroMesa: e.target.value,
            })
        }
        const onIncrementClick = (event) => {
            const elemento = event.target.id;
            const sumandoContador = this.state.pedido.map((dato) => {
                if(dato.id === elemento){
                    dato.contador = dato.contador + 1;
                }
                return dato
              });
            const precioT = sumandoContador.map((dato) => {
                const total = dato.contador*dato.precio;
                return total;           
            })
            let PrecioTo = 0;
            for(let i = 0; i< precioT.length; i++){
                PrecioTo = PrecioTo + precioT[i];
            }     
            this.setState({
              pedido: sumandoContador,
              precioTotal: PrecioTo,
            });
          }
        const onDecrementClick = (event) => {
            const elemento = event.target.id;
            const sumandoContador = this.state.pedido.map((dato) => {
                if(dato.id === elemento){
                    dato.contador = dato.contador - 1;
                }
                return dato
              });
            const precioT = sumandoContador.map((dato) => { 
                if(dato.contador !== 0){
                   const total = dato.contador*dato.precio; 
                   return total;
                }   
                else {
                    const total = 0
                    return total;
                }   
            })
            const eliminandoProducto = sumandoContador.filter((data) => {
                return data.contador !== 0; 
            });

            let PrecioTo = 0;
            for(let i = 0; i< precioT.length; i++){
                PrecioTo = PrecioTo + precioT[i];
            }   
            this.setState({
              pedido: eliminandoProducto,
              precioTotal: PrecioTo,
            });
          }
        const tipoDesayuno = () => {
            this.setState({
                tipoProducto: 'desayuno',
            })
        }
        const tipoAlmuerzo = () => {
            this.setState({
                tipoProducto: 'almuerzo',
            })            
        }
        const tipoBebida = () => {
            this.setState({
                tipoProducto: 'bebida',
            })            
        }   
        const obtenerPedido = (event) => {
            // console.log(event.target.parentNode.id);
            const idElemento = event.target.id;
            const producto = this.state.Menu.filter((data) => data.id === idElemento);
            // console.log(producto[0].data.precioProducto);
            const obj = {
                id: producto[0].id,
                contador: 1,
                producto: producto[0].data.nombreProducto,
                precio: producto[0].data.precioProducto,
                preparado: false,
                servido: false,
            }
            const total = this.state.precioTotal;
            this.setState({precioTotal: total + producto[0].data.precioProducto,
                pedido: [...this.state.pedido, obj]});
            // console.log(this.state.pedido);
        } 

        const enviarPedido = () => {
            var date = new Date();
            const hora = date.getHours();
            const minuto = date.getMinutes();
            const segundo = date.getSeconds();
            const horaActual = `${hora}h ${minuto}m ${segundo}s`;
            const tiempo = date.getTime().toString();
            console.log('tiempo', date.getTime())
            console.log(tiempo);
            db.collection('pedidos').add({
                horaInicio: horaActual,
                tiempoInicio: tiempo,
                tiempoTermino: '',
                nombreCliente: this.state.nombreCli,
                numeroMesa: this.state.numeroMesa,
                pedidos: this.state.pedido,
                precioTotal: this.state.precioTotal,
                pedidoEntregado: false,
                pedidoTerminado: false,
            }).then(() => {
                document.querySelector('.nroMesa').value = '';
                document.querySelector('.nombreCliente').value = '';
                this.setState({
                    nombreCli: ' ',
                    numeroMesa: ' ',            
                    pedido: [],
                    precioTotal: 0
                })
                console.log('Subido exitosamente');
            }).catch(() => {
                console.log('error');
            })
        }
        const cancelarPedido = () => {
            document.querySelector('.nroMesa').value = '';
            document.querySelector('.nombreCliente').value = '';
            this.setState({
                nombreCli: ' ',
                numeroMesa: ' ',            
                pedido: [],
                precioTotal: 0
            })
        }
        return (
            <React.Fragment>
                <Cabecera/>
                <div className='contenedorCuerpo'>
                    <div className='contenedorPedido'>
                        <section className='descripcionPedido'>
                            <div className='titulo'>ORDEN DE PEDIDO</div>
                            <form className="formulario">
                                N° de mesa:<input type="text" className="nroMesa" onChange={mesaChange}/><br/>
                                Nombre del cliente:<input type="text" className="nombreCliente" onChange={nombreChange}/>
                            </form>
                            <div>
                            <table  className='tabla'>
                                <tbody>
                                    {
                                        this.state.pedido.map((item, key) => {
                                                // console.log(key)
                                                return (
                                                    <OrdenPedidos key={key}
                                                        idcontenedor={item.id}
                                                        Increment={onIncrementClick}
                                                        Decrement={onDecrementClick}
                                                        counter={item.contador}
                                                        nombre={item.producto}
                                                        precio={item.precio}
                                                    />                        
                                                );   
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>
                                <p><strong>Total: {this.state.precioTotal}</strong></p>
                        </section>
                        <button className='btnEnviar' onClick={enviarPedido}>ENVIAR</button>
                        <button className='btnCancelar' onClick={cancelarPedido}>CANCELAR</button>
                    </div>
                    <div className='productos'>
                        <section className='selectorMenu'>
                            <button className='btnMenu' onClick={tipoDesayuno}>DESAYUNO</button>
                            <button className='btnMenu' onClick={tipoAlmuerzo}>ALMUERZO Y CENA</button>
                            <button className='btnMenu' onClick={tipoBebida}>BEBIDAS</button>
                        </section>
                        <section className='mostradorPedidos'>
                            <Show menu={this.state.Menu} tipoDeProducto={this.state.tipoProducto} onClick={obtenerPedido}/>
                        </section>
                    </div>
                </div>
            </React.Fragment>
        )
    }
 }

export default Page2