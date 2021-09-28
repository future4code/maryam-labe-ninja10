import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 40px 0px;
    background-color: orange;
    height: 100vh;
`

const CadastrareContratarContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 400px;
    height: 400px;
    padding: 20px 10px;
    border-radius: 30px;
`

const Buttons = styled.button`
    margin: 10px;
`
//DEVE SER FEITA UMA ManagerPage PRA SERVIÇOS, DE FORMA A RENDERIZAR AS PÁGINAS AO CLICAR NOS BOTÕES DA HOME
export default class Home extends React.Component {
    render() {
        return (
            <HomeContainer>
                <CadastrareContratarContainer>
                    <Buttons>Quero cadastrar um serviço</Buttons>
                    <p>	Lorem ipsum iaculis ac orci lobortis pretium, porttitor donec quisque lobortis ac interdum neque</p>
                </CadastrareContratarContainer>
                <CadastrareContratarContainer>
                    <Buttons>Quero contratar um serviço</Buttons>
                    <img alt='Imagem de homem segurando uma furadeira'></img>
                </CadastrareContratarContainer>
            </HomeContainer >
        )
    }
}