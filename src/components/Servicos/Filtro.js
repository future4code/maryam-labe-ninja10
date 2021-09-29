import React from "react";
import styled from "styled-components";

// Filtros

const ContainerFiltro = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 120px;
    padding: 25px;
    input {
        width: 300px;
        margin-bottom: 10px;
    }
    select {
        width: 300px;
        margin-bottom: 10px;
    }
`

function Filtro (props) {
    return (
        <div>
            <ContainerFiltro>
                    <input placeholder="Preço Mínimo" type="number" value={props.precoMin} onChange={props.updatePrecoMin} min="0" max="infinite"/>
                    <input placeholder="Preço Máximo" type="number" value={props.precoMax} onChange={props.updatePrecoMax} min="0" max="infinite"/>
                    <input placeholder="Busca por título ou descrição" type="text" id="nomeServico" name="nomeServico" value={props.buscar} onChange={props.updateBuscar} />
            </ContainerFiltro>
        </div>
    )
}

export default Filtro