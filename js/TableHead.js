import React from "react";
import ReactDOM from "react-dom";
import TableBody from "./Table.js";
import data from "./data.js";

export default function Table(props) {
    console.log(props)
    return(
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Precio</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                props.Datos.map(desa => {
                    return(<tr>
                        <td>{desa.item}</td>
                        <td>{desa.price}</td>
                        </tr>
                            ) 
                        })
                    }
                {/* <TableBody Datos={data.desayuno}/>
                <TableBody Datos={data.comida}/> */}

            </tbody>
        </table>
    )
};