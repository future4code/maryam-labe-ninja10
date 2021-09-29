import React from "react";
import styled from "styled-components";
import ManagerPage from "./ManagerPage";

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

export default function Home(props) {
    return (
        <HomeContainer>
            <CadastrareContratarContainer>
                <Buttons onClick={() => props.changePage("register")}>Quero cadastrar um serviço</Buttons>
                <p>	Lorem ipsum iaculis ac orci lobortis pretium, porttitor donec quisque lobortis ac interdum neque</p>
            </CadastrareContratarContainer>
            <CadastrareContratarContainer>
                <Buttons onClick={() => props.changePage("servicos")}>Quero contratar um serviço</Buttons>
                <img alt='Imagem de homem segurando uma furadeira'></img>
            </CadastrareContratarContainer>
        </HomeContainer >
    )
}