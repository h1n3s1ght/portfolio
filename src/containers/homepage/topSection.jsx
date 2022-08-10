import React from "react";
import styled from "styled-components";
import Marginer from "../../components/marginer/index"
import BackgroundImg from "../../assets/images/background.gif";
import { FullName } from "../../components/logo/fullName";


//=== If Initials Are Needed ===
//==============================
// import { Logo } from "../../components/logo/index";
//==============================


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
    background-color: rgba(43,146,228,.15);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export function TopSection(props){
    return (
    <TopContainer>
        <BackgroundFilter>
            <Marginer direction="vertical" margin="30em"/>
            <FullName/>
        </BackgroundFilter>
    </TopContainer>
    )
};