import React from "react";
import styled from "styled-components";

// Filtros

const ContainerFiltro = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    background-color: #FF9933;
    color: white;
    align-items: center;
    padding: 25px;
    input {
        width: 300px;
        margin-bottom: 10px;
        
    }
`

function Filtro (props) {
    return (
        <div>
            <ContainerFiltro>
                    <h1>Filtro</h1>
                    <input placeholder="Preço Mínimo" type="number" value={props.precoMin} onChange={props.updatePrecoMin} min="0" max="infinite"/>
                    <input placeholder="Preço Máximo" type="number" value={props.precoMax} onChange={props.updatePrecoMax} min="0" max="infinite"/>
            </ContainerFiltro>
        </div>
    )
}

export default Filtro