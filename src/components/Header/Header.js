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


export default function Header(props) {
    return (
        <HeaderContainer>
            <LogoAndTitleContainer>
                <img alt='logo'></img>
                <h1>NEXUM</h1>
            </LogoAndTitleContainer>
            <ButtonsContainer>
                <button onClick={() => props.changePage("home")}>Home</button>
                <button onClick={() => props.changePage("carrinho")}>Carrinho</button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}
