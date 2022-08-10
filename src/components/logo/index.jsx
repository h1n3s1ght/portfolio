import React from "react";
import styled, { css } from "styled-components";
import BHLogo from "../../assets/logo/initials_logo_primary.png"
import { theme } from "../../theme";

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const LogoImg = styled.img`
    width: 12%;
    height: 12%;
`;

export function Logo(props) {
    return (
    <LogoContainer>
        <LogoImg src={BHLogo} />
    </LogoContainer>)
}