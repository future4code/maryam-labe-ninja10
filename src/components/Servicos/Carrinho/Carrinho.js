import React from 'react';
import styled from 'styled-components';
import { servicesInCart } from '../Servicos'

const CarrinhoContainer = styled.div`
    border-radius: 10px;
    background-color: #FF9933;
    padding: 0px 16px 16px;
    margin: 100px;
    width: 300px;
    height: 200px;
    text-align: center;
    border-radius: 10px;
    display: flex;
    align-items: center;
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
    render() {
        return (
            <FundoCarrinho> 
                <ContainerCima>
                        {this.state.cart.map((servico) => {
                            return (
                                <CarrinhoContainer>
                                    <CardCarrinhoContainer>
                                        <h2>{servico.title}</h2><li><b>Preço:<b>
                                        </b> R$ {servico.price}</b></li>
                                    </CardCarrinhoContainer>
                                    <BotaoCarrinho>
                                        <button> Remover</button>
                                    </BotaoCarrinho>
                                </CarrinhoContainer>
                            )
                        })}
                    {/* <SomaContainer>
                        <h2>Web Developer</h2><b>Preço:<b>
                        </b> R$ 1200.00</b><br></br>
                        <p>Total:</p>
                        <button> Finalizar Compra</button><br></br>
                    </SomaContainer> */}
                </ContainerCima>
                <VoltarContainer>
                    <button onClick={() => this.props.changePage("servicos")}>Voltar para Lista</button>
                </VoltarContainer>
            </FundoCarrinho>    
        )
    }
}