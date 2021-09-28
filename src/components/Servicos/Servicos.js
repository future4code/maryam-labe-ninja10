import React from "react";
import styled from "styled-components";

// Filtros

const ContainerFilter = styled.div `
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

// Cards Serviços

const ContainerServicos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 10px;
`

const Cards = styled.div`
    border: 1px solid black;
    background-color: #FF9933;
    padding: 0px 16px 16px;
    margin: 10px;
`

const Botao = styled.button`

`


export default class Servicos extends React.Component {
    render() {
        return (
            <div>
                <ContainerFilter>
                    <input placeholder="Valor Mínimo" type="number" min="0" max="infinite"/>
                    <input placeholder="Valor Máximo" type="number" min="0" max="infinite"/>
                    <input placeholder="Busca por título ou descrição" />
                    <select>
                        <option>Sem Ordenação</option>
                        <option>Menor Valor</option>
                        <option>Maior Valor</option>
                        <option>Título</option>
                        <option>Prazo</option>
                    </select>
                </ContainerFilter>

                <ContainerServicos>
                    <Cards>
                        <h3>Web Developer</h3>
                        <p>
                            <b>Preço:</b>
                            R$ 1200.00
                        </p>
                        <p>
                            <b>Prazo:</b>
                            29/09/2021
                        </p>
                        <button>Ver Detalhes</button>
                        <button>Adicionar no Carrinho</button>
                    </Cards>
                </ContainerServicos>
            </div>
        )
    } 
}




