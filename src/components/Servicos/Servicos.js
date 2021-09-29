import Axios from "axios";
import React from "react";
import styled from "styled-components";
import Filtro from "./Filtro";


const headers = {
    headers: {
        Authorization: "7b34660a-e65f-4a6b-b3af-7b3651eccdad"
    }
}

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

    state = {
        servicos: [],
        buscar: "",
        precoMin: "",
        precoMax: "",
        ordenacao: ""
    }

    componentDidMount () {
        this.getAllJobs()
    }

    getAllJobs = () => {
        const url = 'https://labeninjas.herokuapp.com/jobs'

        Axios
        .get(url, headers)
        .then((res) => {
            this.setState({
                servicos: res.data.jobs
            })
        })
        .catch((err) => {
            alert(err)
        })
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

        const listServicos = this.state.servicos.map((servico) => {
            
            return (
                <Cards key={servico.id}>
                    <h3>{servico.title}</h3>
                    <p>
                        <b>Preço:</b>
                        R$ {servico.price}
                    </p>
                    <p>
                        <b>Prazo:</b>
                        {servico.dueDate}
                    </p>
                    <button>Ver Detalhes</button>
                    <button>Adicionar no Carrinho</button>
                </Cards>
            )
        })
        
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

                  {listServicos}


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

                    

                </ContainerServicos>
            </div>
        )
    } 
}