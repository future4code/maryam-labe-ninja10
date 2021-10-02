import axios from "axios";
import React from "react";
import styled from "styled-components";
import { servicesInCart } from "./Servicos";


// Container Background

const ContainerPage = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    background-color: #F5F6FA;
    align-items: center;
    justify-content: center;
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
`

const DetalhesServicosContainer= styled.div`
    font-size: 10em;
    border: none;
    margin-top: 10px;
    height: 100%;

`


// Container Cartão Descrição

const Cardes = styled.div`
    margin-top: 30px;
    margin-bottom: 25px;
    border-radius: 30px;
    width: 420px;
    height: 200px;
    box-shadow: 6px 8px 3px #727D71;
	border: 1px solid gray;
    background-color: white;

`

const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    color: black;
    font-weight: 600;
    font-size: medium;
    text-align: center; 
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-top: 25px;
    margin-bottom: 10px;
    h2{
        margin-bottom: 10px;
    }
    h3{
        margin-bottom: 10px;
    }
    p{
        margin-bottom: 10px;
    }

`


// Botões página

const BotoesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 30px;
    margin-bottom: 30px;
`

const Botão1 = styled.button`
    width: 250px;
    height: 40px;
    background-color: #FF9933;
    color: white;

    font-size: medium;
    font-weight: 800;
    
    border: hidden;
    border-radius: 20px;
    box-shadow: 3px 5px 3px #727D71;
    cursor: pointer;

`

const Botão2 = styled.button`
    margin-top: 35px;
    width: 180px;
    height: 33px;
    background-color: white;
    color: #FF9933;

    font-size: small;
    font-weight: 800;

	border: none;
    border-radius: 20px;
    border: 1px solid gray;
    box-shadow: 3px 4px 3px #727D71;
    cursor: pointer;

`



export default class DetalhesServicos extends React.Component {
    state = {
        servico: {},
        servicesInCart: servicesInCart
    };

    componentDidMount(){
        this.getServico()
    }

    getServico = () => {
        const url = `https://labeninjas.herokuapp.com/jobs/${this.props.id}`;
        const headers = {
            headers: {
                Authorization: "7b34660a-e65f-4a6b-b3af-7b3651eccdad"
            }
        }

        axios.get(url, headers)
        .then((res) => this.setState({ servico: res.data }))
        .catch((err) => console.log(err.response))
    };

    // addToCart = (serviceId) => {
    //     const serviceInCart = this.state.servicesInCart.find(servico => serviceId === servico.id)

    //     if (serviceInCart) {
    //         const newServicesInCart = this.state.servicesInCart.map((servico) => {
    //             if (serviceId === servico.id) {
    //                 return {
    //                     ...servico, 
    //                     itens: servico.itens + 1
    //                 }
    //             }
    //             return servico
    //         })
    //         this.setState({
    //             servicesInCart: newServicesInCart
    //         })
    //     }
    //     else {
    //         const serviceToAdd = this.state.servicos.find(servico => serviceId === servico.id)

    //         const newServicesInCart = [...this.state.servicesInCart, {...serviceToAdd, itens: 1}]
    //         this.setState({
    //             servicesInCart: newServicesInCart
    //         })
    //     }
    //     alert('Seu produto foi adicionado ao carrinho')
    // };


    render() {
        console.log(this.state.servico)
        return (
            <ContainerPage>
                <DetalhesServicosContainer/>
                    <Cardes>
                        <Descricao>
                            <h2>{this.state.servico.title}</h2>
                            <h3>{this.state.servico.description}</h3>
                            <p>Prazo: {this.state.servico.dueDate}</p>
                            <p>Preço: R$ {this.state.servico.price}</p>
                        </Descricao>
                    </Cardes>
                    <BotoesContainer>
                            <Botão1 /*</BotoesContainer>onClick={() => this.addToCart(this.props.id)}*/>Adicionar ao carrinho</Botão1>
                            <Botão2 onClick={() => this.props.changePage('servicos')}>Voltar para Lista</Botão2>
                    </BotoesContainer>
            </ContainerPage>
        )
    }
}