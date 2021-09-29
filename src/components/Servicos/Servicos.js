import Axios from "axios";
import React from "react";
import styled from "styled-components";

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
        servicos: []
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

    render() {

        const listServicos = this.state.servicos.map((servico) => {
            function adicionaZero(numero) {
                if (numero <= 9) {
                    return "0" + numero
                } else {
                    return numero
                }
            }
            let data = new Date(servico.dueDate);
            // Precisa arrumar, pois transforma o dia para o um dia anterior.
            let dataFormatada = (adicionaZero(data.getDate())) + "/" + (adicionaZero(data.getMonth() + 1)) + "/" + data.getFullYear(); 
            
            return (
                <Cards key={servico.id}>
                    <h3>{servico.title}</h3>
                    <p>
                        <b>Preço:</b>
                        R$ {servico.price}
                    </p>
                    <p>
                        <b>Prazo:</b>
                        {servico.dueDate}<br></br>
                        {dataFormatada}
                    </p>
                    <button>Ver Detalhes</button>
                    <button>Adicionar no Carrinho</button>
                </Cards>
            )
        })
        
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
                    {listServicos}
                </ContainerServicos>
            </div>
        )
    } 
}




