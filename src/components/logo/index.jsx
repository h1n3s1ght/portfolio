import React from "react";
import styled from "styled-components";
import BHLogo from "../../assets/logo/initials_logo_primary.png"

const LogoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const LogoImg = styled.img`
    width: 35%;
    height: 35%;
`;

export function Logo(props) {
    return (
    <LogoContainer>
        <LogoImg src={BHLogo} />
    </LogoContainer>)
}