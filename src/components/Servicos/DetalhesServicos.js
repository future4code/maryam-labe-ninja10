import axios from "axios";
import React from "react";
import styled from "styled-components";
import { servicesInCart } from "./Servicos";


const DetalhesServicosContainer= styled.div`
    font-size: 10em;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 10px;
    margin-right: 10px;
    
`

const BotoesContainer = styled.div`
    justify-content: center;
    width: 350px;
    align-items: center;
    font-size: 2em;
    padding: 40px 20px;
    margin-right: 5px;
`
const Cardes = styled.div`
    border-radius: 30px;
    background-color: #FF9933;
    padding: 0px 16px 16px;
    margin: 10px;
    width: 400px;
    height: 400px;
    text-align: center;
    
`

const ContainerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
                <h2>{this.state.servico.title}</h2> <br></br>
                <p>{this.state.servico.description}</p>
                <p>Prazo: {this.state.servico.dueDate}</p>
                <p>Preço: R$ {this.state.servico.price}</p>
                <BotoesContainer>
                <button onClick={() => this.props.changePage('servicos')}>Voltar para Lista</button>
                <button /*</BotoesContainer>onClick={() => this.addToCart(this.props.id)}*/>Adicionar ao carrinho</button>
                </BotoesContainer>
                </Cardes>
            </ContainerPage>
        )
    }
}