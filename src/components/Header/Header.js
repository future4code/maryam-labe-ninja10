import React from "react";
import styled from "styled-components";
import logo from '../../imgs/logo-caixa-menor.png';
import logoNome from '../../imgs/logo-titulobranco-menor.png'



const HeaderContainer = styled.header`
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
`

const LogoAndTitleContainer = styled.span`
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    align-items: center;
    color: white;
`

const ButtonsContainer = styled.span`
    display: flex;
    justify-content: space-around;
    width: 200px;
    align-items: center;
`

const LogoCaixa = styled.img`
    width: 50px;
    margin-left: 15px;
    
`

const LogoNome = styled.img`
    width: 110px;
    margin-right: 20px;
    
`



export default function Header(props) {
    return (
        <HeaderContainer>
            <LogoAndTitleContainer>
                <LogoCaixa src={logo} alt='logo'/>
                <LogoNome src={logoNome} alt='nome da empresa' />
            </LogoAndTitleContainer>
            <ButtonsContainer>
                <button onClick={() => props.changePage("home")}>Home</button>
                <button onClick={() => props.changePage("carrinho")}>Carrinho</button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}
