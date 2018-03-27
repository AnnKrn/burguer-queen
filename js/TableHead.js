import React from "react";

class Table extends React.Component{
    constructor(props){
        super(props)
        this.item = "Producto"
        this.price = "Precio"

    }
    render(){
        
        return(
            <table>
                <thead>
                    <tr>
                        <th>{this.item}</th>
                        <th>{this.price}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
                this.props.Datos.map((desa, index) => {
                    return(<tr>
                        <td key={index}>{desa.item}</td>
                        <td key={index}>{desa.price}</td>
                        <td><button>Agregar</button></td>
                        </tr>
                            ) 
                        })
                    }
                </tbody>
            </table>
        )
    }
}

// export default function Table(props) {
//     console.log(props)
//     return(
//         <table>
//             <thead>
//                 <tr>
//                     <th>Item</th>
//                     <th>Precio</th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//             {
//                 props.Datos.map(desa => {
//                     return(<tr>
//                         <td>{desa.item}</td>
//                         <td>{desa.price}</td>
//                         <td><button>Agregar</button></td>
//                         </tr>
//                             ) 
//                         })
//                     }

//             </tbody>
//         </table>
//     )
// };

export default Table;