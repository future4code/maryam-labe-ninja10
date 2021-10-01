import React from "react";
import styled from "styled-components";

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
    render() {
        return (
            <ContainerPage>
                <DetalhesServicosContainer/>
                <Cardes>
                <h2>Web Developer</h2> <br></br>
                <p> Realizamos o desenvolvimento técnico e visual<br></br> de páginas da internet,<br></br> manutenção de sites, definindo linguagens,<br></br> bancos de dados, armazenamentos e atualizações!
                </p>
                    <br></br><b>Prazo:</b>
                    <b> 29/09/2021 </b><br></br>
                    <b>Preço:<b>
                    </b> R$ 1200.00</b> <br></br>
                <BotoesContainer>
                <button onClick={() => this.props.changePage('servicos')}>Voltar para Lista</button>
                </BotoesContainer>
                </Cardes>
            </ContainerPage>
        )
    }
}