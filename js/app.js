import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title.js";
import TableBody from "./Table.js";
import TableHead from "./TableHead.js";

// import Button from "./Buton.js"
import data from "./data.js"

function App() {
    return (
    <div>
        <Title/>
        <table>
            <TableHead/>
            <tbody>
                <TableBody Datos={data.desayuno}/>
            </tbody>
        </table>
        <table>
            <TableHead/>
            <tbody>
                <TableBody Datos={data.commida}/>
            </tbody>
        </table>
    </div>
    )
};

ReactDOM.render(<App/>, document.getElementById("react_container"))