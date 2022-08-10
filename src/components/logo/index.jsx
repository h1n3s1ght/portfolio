import React from "react";
import styled, { css } from "styled-components";
import BHLogo from "../../assets/logo/initials_logo_primary.png"
import { theme } from "../../theme";

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