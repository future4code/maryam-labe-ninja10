import React from 'react';
import styled from 'styled-components';
import { servicesInCart } from '../Servicos'

const CarrinhoContainer = styled.div`
    border-radius: 10px;
    background-color: #FF9933;
    padding: 0px 16px 16px;
    margin: 30px;
    width: 300px;
    height: 200px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-family: Graphik-Medium, Graphik-Regular, "Gotham SSm A", "Gotham SSm B", "Helvetica Neue", Helvetica, Arial, sans-serif;
`
const BotaoCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    margin-top: 20px;
    
    button {
        margin-bottom: 10px;
    }

`

const CardCarrinhoContainer = styled.div`
    border-radius: 5px;
    background-color: ghostwhite;
    padding: 0px 16px 16px;
    margin: 1px;
    width: 200px;
    height: 150px;
    text-align: center;
`
const VoltarContainer = styled.div`
    margin-left: 100px;


`
const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const SomaContainer = styled.div`
    justify-content: left;
    border-radius: 30px;
    background-color: #FF9933;
    padding: 0px 16px 16px;
    margin: 100px;
    width: 300px;
    height: 200px;
    text-align: center;
    border-radius: 10px;
`
const ContainerCima = styled.div`
    display: flex;  

`
const FundoCarrinho = styled.div`
    background-color: #F5F6FA;
`
export default class Carrinho extends React.Component {
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
        return (
            <FundoCarrinho> 
                <ContainerCima>
                    <ServicesContainer>
                        {this.state.cart.map((servico) => {
                            return (
                                <CarrinhoContainer key={servico.id}>
                                    <CardCarrinhoContainer>
                                        <h2>{servico.title}</h2><li><b>Preço:<b>
                                        </b> R$ {servico.price}</b></li>
                                    </CardCarrinhoContainer>
                                    <BotaoCarrinho>
                                        <button onClick={() => this.removeServiceCart(servico.id)}> Remover</button>
                                    </BotaoCarrinho>
                                </CarrinhoContainer>
                            )
                        })}
                    </ServicesContainer>
                    <SomaContainer>
                        <h2>Valor Total</h2><b>Preço: <b>
                        </b> R$ {this.totalCart()}</b><br></br>
                        <button onClick={this.CompletedCart}> Finalizar Compra</button><br></br>
                    </SomaContainer>
                </ContainerCima>
                <VoltarContainer>
                    <button onClick={() => this.props.changePage("servicos")}>Voltar para Lista</button>
                </VoltarContainer>
            </FundoCarrinho>    
        )
    }
}
