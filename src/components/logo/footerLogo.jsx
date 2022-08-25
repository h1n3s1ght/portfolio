import React from "react";
import styled from "styled-components";
import BHLogo from "../../assets/logo/footer_logo_fullname.png"

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    margin-right: 5%;
    flex-direction: row;
`;

const LogoImg = styled.img`
    width: 90%;
`;

export function FooterLogo(props) {
    return (
    <LogoContainer>
        <LogoImg src={BHLogo} />
    </LogoContainer>)
};



const LogoContainerTab = styled.div`
    width: 100%;
    display: flex;
    margin-right: 0%;
    flex-direction: row;
    justify-content: center;
    align-content: center;
`;

const LogoImgTab = styled.img`
    width: 100%;

`;

export function FooterLogoTab(props) {
    return (
    <LogoContainerTab>
        <LogoImg src={BHLogo} />
    </LogoContainerTab>)
};