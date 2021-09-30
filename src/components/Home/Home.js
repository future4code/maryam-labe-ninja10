import React from "react";
import styled from "styled-components";
import fotoHome from '../../imgs/fotoHome-semfundo.png';
import fundo from '../../imgs/fundo-Home.png'

const HomeContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 40px 0px;
    background-color: #FF9933;
    height: 100vh;
    position: relative;
    width: 1320px;
`
const Fundo = styled.img`
    position: absolute;
    height: 700px;
    width: 1320px;
`

const CadastrareContratarContainer = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    
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
        <div>
            <Fundo src={fundo}/>
            <HomeContainer>
            <CadastrareContratarContainer>
                <Buttons onClick={() => props.changePage("register")}>Quero cadastrar um serviço</Buttons>
                <p>Conectamos profissionais com pessoas solicitando o serviço</p>
                <p>Estamos presentes em mais de 20 estados em todo o país</p>
                <p>Cadastre seu serviço e tenha mais visibilidade no mercado</p>
            </CadastrareContratarContainer>
            <CadastrareContratarContainer>
                <Buttons onClick={() => props.changePage("servicos")}>Quero contratar um serviço</Buttons>
                <img src={fotoHome} alt='Mulher com computador'></img>
            </CadastrareContratarContainer>
        </HomeContainer >
        </div>
        
    )
}