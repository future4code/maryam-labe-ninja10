import React from "react";
import styled from "styled-components";
import Filtro from "./Filtro";

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
    
    state = {
    buscar: "",
    precoMin: "",
    precoMax: "",
    ordenacao: ""
    }

    updateBuscar = (event) => {
        this.setState({
            buscar: event.target.value
        })
    }

    updatePrecoMin = (event) => {
        this.setState({
            precoMin: event.target.value
        })
    }
    
    updatePrecoMax = (event) => {
        this.setState({
            precoMax: event.target.value
        })
    }

    updateOrdenacao = (event) => {
        this.setState({
            ordenacao: event.target.value
        })
    }


    render() {

        return (
            <div>
                <Filtro>
                buscar={this.state.buscar} 
                updateBuscar={this.updateBuscar}
                precoMin={this.state.precoMin}
                updatePrecoMin={this.updatePrecoMin}
                precoMax={this.state.precoMax}
                updatePrecoMax={this.updatePrecoMax}
                
                </Filtro>

                <select value={this.state.ordenacao} onChange={this.updateOrdenacao}>
                    <option value="titulo">Título</option>
                    <option value="menor preço">Menor Preço</option>
                    <option value="maior preço">Maior Preço</option>
                    <option value="prazo">Prazo</option>
                    {this.state.ordenacao}
                </select>

                
                <ContainerServicos>

                {/* .sort((atualServico, proximoServico) => {
                    switch (this.state.ordenacao) {
                        case "maior preço":
                            return 1 * (atualServico.value - proximoServico.value)
                        case "menor preço":
                            return -1 * (atualServico.value - proximoServico.value)
                        case "titulo":
                            return 1 * (atualServico.value - proximoServico.value)
                        case "prazo":
                            return -1 * (atualServico.value - proximoServico.value)
                    
                    }
                }) */}

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