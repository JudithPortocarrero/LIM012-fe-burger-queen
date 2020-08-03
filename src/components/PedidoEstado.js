import React from 'react'

class PedidoEstado extends React.Component {
    render(){
        const data = this.props.data;
        return(
            <tr>
                {
                    data.map((it) => {
                        return(
                            <td>{it.contador}</td>
                            <td>{it.producto}</td>
                            <td><button></button></td>
                            <td><button></button></td>    
                        )
                    })
                }   
            </tr>
        )        
    }

}
export default PedidoEstado;
{/* <tr>
<td>{this.props.contadorItem}</td>
<td>{this.props.nombreItem}</td>
<td><button></button></td>
<td><button></button></td>
</tr> */}