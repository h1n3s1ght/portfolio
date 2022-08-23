import React from "react";
import styled from "styled-components";
import BHLogo from "../../assets/logo/initials_logo_primary.png"
import { scroller } from "react-scroll";

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const LogoImg = styled.img`
    width: 35%;
    height: 35%;
`;

const scrollToTop = () => {
    scroller.scrollTo("home", {smooth: true, duration: 1500});
}

export function Logo(props) {
    return (
    <LogoContainer onClick={scrollToTop}>
        <LogoImg src={BHLogo}/>
    </LogoContainer>)
};