import React from "react";
import ReactDOM from "react-dom";
import data from "./data.js"

export default function TableBody(props) {
    console.log(props)
  
    return (
            props.Datos.map(desa => {
                return(<tr>
                    <td>{desa.item}</td>
                    <td>{desa.price}</td>
                    </tr>
                ) 
            })
        ) 
        
    
};

  /* <td>Café Americano</td>
            <td>5</td>
            <td></td> */