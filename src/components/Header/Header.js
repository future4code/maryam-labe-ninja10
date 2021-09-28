import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 100px;
    align-items: center;
`

const LogoAndTitleContainer = styled.span`
    display: flex;
    justify-content: space-between;
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

// A FUNÇÃO ABAIXO DEVE ENTRAR NO APP.JS, SENDO Q NO STATE DO APP.JS DEVE TER UMA PROPRIEDADE CHAMADA currentPage
// changePage = (currentPage) => {
//     this.setState({ currentPage: currentPage })
// }


export default function Header(props) {
    return (
        <HeaderContainer>
            <LogoAndTitleContainer>
                <img alt='logo'></img>
                <h1>NEXUM</h1>
            </LogoAndTitleContainer>
            <ButtonsContainer>
                <button /*onClick={() => props.changePage("homePage")}*/>Home</button>
                <button /*onClick={() => props.changePage("shoppingCartPage")}*/>Carrinho</button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}
