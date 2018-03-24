import ReactDOM from "react-dom";
import React from "react";

function All() {
    return( <div>
        <h1>Deasayuno</h1>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Precio</th>
                    <th>Boton</th>
                </tr>
            </thead>
    
            <tbody>
                <tr>
                    <td>Café Americano</td>
                    <td>5</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Café con leche</td>
                    <td>7</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Sandwich de jamón y queso</td>
                    <td>10</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Jugo natural</td>
                    <td>7</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
        </div>
    )
};

ReactDOM.render(<All/>, document.getElementById("react-container"))