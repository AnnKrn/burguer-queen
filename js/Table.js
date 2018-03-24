import React from "react";
import ReactDOM from "react-dom";
// import Button from "./Buton.js"
import data from "./data.js"

export function TableHead() {
    return(
        <thead>
            <tr>
                <th>Item</th>
                <th>Precio</th>
                <th></th>
            </tr>
        </thead>
    )
};

export function TableBody(props) {
    // console.log(props)
    
            // {props.Datos.map(desa => {
            //     return (<tr>
            //         <td>{desa.item}</td>
            //     </tr>)
            // })}
            // {props.Datos.map(desa => {
            //     return <td>{desa.price}</td>
            // })}
    return (<tr>
            <td>Café Americano</td>
            <td>5</td>
            <td></td>
        </tr>
    ) 
        
    
};
