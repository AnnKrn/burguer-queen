import React from "react";

class TableBebidas extends React.Component{
    constructor(props){
        super(props)
        this.item = "Producto"
        this.big = "Grande"
        this.small = "Chico"
    }
    render(){
        
        return(
            <table>
                <thead>
                    <tr>
                        <th>{this.item}</th>
                        <th>{this.big}</th>
                        <th>{this.small}</th>
                    </tr>
                </thead>
                <tbody>
                {
                this.props.Datos.map((desa, index) => {
                    return(<tr>
                        <td key={index}>{desa.size.grande}</td>
                        <td key={index}>{desa.size.chico}</td>
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

// export default function TableBebidas(props) {
//     console.log(props)
//     return(
//         <table>
//             <thead>
//                 <tr>
//                     <th>Item</th>
//                     <th>Grande</th>
//                     <th>Chico</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {
//                 props.Datos.map(desa => {
//                     return(<tr>
//                         <td>{desa.item}</td>
//                         <td>{desa.size.grande}</td>
//                         <td>{desa.size.chico}</td>
//                         <td><button>Agregar</button></td>
//                         </tr>
//                             ) 
//                         })
//                     }

//             </tbody>
//         </table>
//     )
// };

export default TableBebidas