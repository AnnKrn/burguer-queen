import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title.js";
import TableBebidas from "./bebidas.js";
import Table from "./TableHead.js";
import data from "./data.js"

class App extends React.Component{
    render(){
        return (
            <div>
                <Title/>,
                <Table  Datos={data.desayuno}/>,
                <TableBebidas Datos={data.hamburguesa}/>,
                <Table Datos={data.acompañamientos}/>,
                <TableBebidas Datos={data.bebidas}/>,
                <Table Datos={data.ingredienteExtra}/>
            </div>
            )
    }
}
// function App(props) {
//     return (
//     <div>
//         <Title/>,
//         <Table  Datos={data.desayuno}/>,
//         <TableBebidas Datos={data.hamburguesa}/>,
//         <Table Datos={data.acompañamientos}/>,
//         <TableBebidas Datos={data.bebidas}/>,
//         <Table Datos={data.ingredienteExtra}/>
//     </div>
//     )
// };

ReactDOM.render(<App />, document.getElementById("react_container"))