import React from 'react'
import db from '../conexionFirebase';
import Producto from './contenedorProducto'
import './styles/show.css'

class Show extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            menu: []
        }        
    }

    componentDidMount(){
            db.collection('menu').get().then((snapShots) => {
                this.setState({
                    Menu: snapShots.docs.map(doc => {
                        // console.log(doc.data())
                        // console.log(doc.id)
                        return {id: doc.id, data: doc.data()}
                    })
                })
            })
    }

    render(){
        const {Menu} = this.state;
        const {tipoDeProducto} =this.props;
        return (
            <div className='contenedorProducto'>
                {
                    Menu && Menu !== undefined ? Menu.map((item, key) => {
                        if (item.data.tipo === tipoDeProducto) {
                            // console.log(key);
                            return(
                                <Producto className={key}
                                    click={this.props.onClick}
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
    }
}   
export default Show;