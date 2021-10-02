import React from 'react';
import styled from 'styled-components';
import { servicesInCart } from '../Servicos/Servicos'
import lixeira from "../../imgs/lixeira1.png"

// Background Carrinho

const BackgroundSite = styled.div`
    background-color: #F5F6FA;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`
const ContainerPrincipal = styled.div`
    display: flex;
`


// Container Carrinho

const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

export let cart = []

const CarrinhoContainer = styled.div`
    display: flex;
    background-color: #FF9933;
    box-shadow: 4px 6px 3px #727D71;

    border-radius: 10px;
    padding: 0px 16px 16px;
    margin-top: 60px;

    width: 550px;
    height: 120px;
    text-align: center;
    align-items: center;
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-style: small;
`

const CardCarrinhoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    background-color: #FFFFFF;
    box-shadow: 4px 5px 3px #a25922;
	border: 1px solid gray;
    width: 400px;
    height: 80px;
    margin: 0 auto;
    margin-top: 15px;
    border-radius: 10px;

`

const BotaoLixeira = styled.button`
    box-shadow: 3px 5px 3px #a25922;
    border: hidden;
    border-radius: 5px;
    
    background-color: red;
    cursor: pointer;
    
    font-weight: 800;
    margin-top: 15px;
    margin-right: 15px;
    img{
        margin-top: 5px;
    }
`


// Soma Container

const SomaContainer = styled.div`
	border: 1px solid gray;
    border-radius: 30px;
    background-color: white;
    box-shadow: 4px 6px 3px #727D71;

    width: 300px;
    height: 150px;
    text-align: center;
    justify-content: space-evenly;

    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-left: 100px;
    color: #FF9933;

    h3{
        color:black;
    }
`

const BotaoCompra = styled.button`
    margin-bottom: 10px;
    box-shadow: 3px 5px 3px #727D71;
    border: none;
    border-radius: 20px;
    background-color: #FF9933;
    color: white;
    cursor: pointer;
    border: hidden;
    font-weight: bold;
    font-weight: 800;
    width: 200px;
    margin: 0 auto;
`

const VoltarContainer = styled.div`
    margin-right: 400px;
    margin-top: 60px;
`

const BotaoVoltar = styled.button`
    margin: 0 auto;
    margin-bottom: 60px;
    width: 200px;
    height: 30px;
    
    box-shadow: 3px 5px 3px #727D71;
	border: none;
    border-radius: 20px;
    background-color: #FF9933;
    color: white;
    cursor: pointer;
    border: hidden;
    font-weight: bold;
    font-weight: 800;
`



export class Carrinho extends React.Component {
    state = {
        cart: servicesInCart
    }

    removeServiceCart = (serviceId) => {
        if (window.confirm(`Tem certeza que deseja excluir o item do carrinho?`)) {
            const newServicesInCart = this.state.cart.map((servico) => {
                if (serviceId === servico.id) {
                    return {
                        ...servico, 
                        itens: servico.itens -1
                    }
                }
                return servico
            })
            .filter((servico) => {
                return (servico.itens > 0)
            })
    
            this.setState({
                cart: newServicesInCart
            })
            alert(`O item foi deletado do carrinho.`)
        }
    }

    totalCart = () => {
        let totalPrice = 0

        for (let service of this.state.cart) {
            totalPrice += service.price
        }

        return totalPrice
    }

    CompletedCart = () => {
        alert(`Obrigado por contratar com a gente. Volte sempre!`)
        this.setState({
            cart: []
        })
    }

    render() {
        cart = this.state.cart

        return (
            <BackgroundSite> 
                
                <ContainerPrincipal>
                    
                    <ServicesContainer>
                        {this.state.cart.map((servico) => {
                            return (
                                <CarrinhoContainer key={servico.id}>
                                    <CardCarrinhoContainer>
                                        <h3>{servico.title}</h3>
                                        <h3>Preço: R$ {servico.price}</h3>
                                    </CardCarrinhoContainer>
                                        <BotaoLixeira onClick={() => this.removeServiceCart(servico.id)}><img src={lixeira} alt="lixeira imagem" /></BotaoLixeira>
                                    </CarrinhoContainer>
                            )
                        })}
                    </ServicesContainer>
                    
                    <SomaContainer>
                        <h2>Total de compras</h2>
                        <h3>Preço: R$ {this.totalCart()}</h3>
                        <BotaoCompra onClick={this.CompletedCart}> Finalizar Compra</BotaoCompra>
                    </SomaContainer>
                
                </ContainerPrincipal>
                
                <VoltarContainer>
                    <BotaoVoltar onClick={() => this.props.changePage("servicos")}>Voltar para Lista</BotaoVoltar>
                </VoltarContainer>
            
            </BackgroundSite>    
        )
    }
}

export default {Carrinho, cart}