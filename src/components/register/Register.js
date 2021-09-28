import React from "react";
import styled from "styled-components";

const ContainerPageRegister = styled.div `
    background-color: #FF9933;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ContainerRegister = styled.div `
    background-color: ghostwhite;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 440px;
    box-shadow: 4px 4px 3px 3px #a25922;

    button {
        margin-top: 10px;
    }
`

const ContainerForm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    
    input {
        margin-top: 10px;
    }

`
const Inputs = styled.input `
    width: 266px;
`

const InputDate = styled.input `
    width: 268px;
`

const LabelPagamentos = styled.label `
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 10px;
`

class Register extends React.Component {
    state = {
        servico: "",
        descricao: "",
        prazo: "",
        preco: "",
        formasDePagamentos: [
            {
                id: "debito",
                name: "Cartão de Débito"
            },
            {
                id: "credito",
                name: "Cartão de Crédito"
            },
            {
                id: "paypal",
                name: "PayPal"
            },
            {
                id: "pix",
                name: "Pix"
            },
            {
                id: "boleto",
                name: "Boleto"
            },
        ],
        pagamentoSelecionado: []
    }
    
    onChangeServico = (event) => {
        this.setState({
            servico: event.target.value
        })
    }
    onChangeDescricao = (event) => {
        this.setState({
            descricao: event.target.value
        })
    }
    onChangePrazo = (event) => {
        this.setState({
            prazo: event.target.value
        })
    }
    onChangePreco = (event) => {
        this.setState({
            preco: event.target.value
        })
    }
    onChangePagamento = (name) => {
        let selected = this.state.pagamentoSelecionado
        let find = selected.indexOf(name)

        if(find > -1) {
            selected.splice(find, 1)
        } else {
            selected.push(name)
        }

        this.setState({ selected })
    }
    

    render() {

        const checkBoxesPagamento = this.state.formasDePagamentos.map((pagamento) => {
            return (
                <label key={pagamento.id}>
                    <input type="checkbox" 
                        onChange={() => this.onChangePagamento(pagamento.name)}
                        selected={this.state.pagamentoSelecionado.includes(pagamento.name)}
                    ></input>
                    <span>{pagamento.name}</span>
                </label>
            )
        })
        return (
            <ContainerPageRegister>
                <ContainerRegister>
                    <h2>Cadastre o seu serviço</h2>
                    <ContainerForm>
                        <label for="servico">
                            <Inputs 
                            type="text" id="servico" name="servico" placeholder="Título" 
                            value={this.state.servico} onChange={this.onChangeServico}/>
                        </label>
                        <label for="descricao">
                            <Inputs 
                            type="text" id="descricao" name="descricao" placeholder="Descrição" 
                            value={this.state.descricao} onChange={this.onChangeDescricao}/>
                        </label>
                        <label for="prazo">
                            <InputDate type="date" id="prazo" name="prazo" 
                            value={this.state.prazo} onChange={this.onChangePrazo}/>
                        </label>
                        <label for="preco">
                            <Inputs type="number" id="preco" name="preco" placeholder="Preço" min="0" 
                            value={this.state.preco} onChange={this.onChangePreco}/>
                        </label>
                        <LabelPagamentos>Formas de Pagamento:
                            {checkBoxesPagamento}
                        </LabelPagamentos>
                    </ContainerForm>
                    <button>Cadastrar Serviço</button>
                </ContainerRegister>
            </ContainerPageRegister>
        )
    }
}

export default Register