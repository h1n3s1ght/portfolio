import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/images/background.gif";

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    background-size: cover;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(43,146,228,.15)
`;

export function TopSection(props){
    return (
    <TopContainer>
        <BackgroundFilter>

        </BackgroundFilter>
    </TopContainer>
    )
}