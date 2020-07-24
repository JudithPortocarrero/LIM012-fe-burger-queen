import React from 'react'
import Producto from './contenedorProducto'
import './styles/show.css'

const Show = ({tipoDeProducto, menu, onClick}) => {
    const menuTodo = menu;
        return (
            <div className='contenedorProducto'>
                {
                    menuTodo && menuTodo !== undefined ? menuTodo.map((item,key) => {
                        if (item.data.tipo === tipoDeProducto) {
                            // console.log(key);
                            return(
                                <Producto key={key}
                                    click={onClick}
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
export default Show;
// class ProfilePage extends React.Component {
//     constructor(props) {
//       super(props);
//       this.showMessage = this.showMessage.bind(this);
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     showMessage() {
//       alert('Ahora sigues a ' + this.props.user);
//     }
  
//     handleClick() {
//       setTimeout(this.showMessage, 3000);
//     }
  
//     render() {
//       return <button onClick={this.handleClick}>Seguir</button>;
//     }
//   }