import React from "react";
import styled from "styled-components";
import FullLogo from "../../assets/logo/white_logo_transparent_background.png"
import { theme } from "../../theme";

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const LogoImg = styled.img`
    width: 25em;
    height: 15em;
`;

const LogoText = styled.div`
    margin-top: 6px;
    font-size: 40px;
    color: ${theme.primary};
`;

export function FullName(props) {
    return (<LogoContainer>

        <LogoImg src={FullLogo} />

        {/* Leave "LogoText" Empty for no text */}
        <LogoText></LogoText>

    </LogoContainer>)
}