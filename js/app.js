import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title.js";
// import TableBody from "./Table.js";
import Table from "./TableHead.js";

// import Button from "./Buton.js"
import data from "./data.js"

function App(props) {
    return (
    <div>
        <Title/>,
        <Table  Datos={data.desayuno}/>,
        {/* <Table Datos={data.hamburguesas}/>, */}
        <Table Datos={data.acompañamientos}/>,
        {/* <Table Datos={data.bebidas}/>, */}
        <Table Datos={data.ingredienteExtra}/>
    </div>
    )
};

ReactDOM.render(<App />, document.getElementById("react_container"))