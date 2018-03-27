import React from "react";
import ReactDOM from "react-dom";
// import TableBody from "./Table.js";
import data from "./data.js";

export default function TableBebidas(props) {
    console.log(props)
    return(
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Grande</th>
                    <th>Chico</th>
                </tr>
            </thead>
            <tbody>
            {
                props.Datos.map(desa => {
                    return(<tr>
                        <td>{desa.item}</td>
                        <td>{desa.size.grande}</td>
                        <td>{desa.size.chico}</td>
                        <td><button>Agregar</button></td>
                        </tr>
                            ) 
                        })
                    }

            </tbody>
        </table>
    )
};