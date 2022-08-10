import React from "react";
import styled from "styled-components";
import Marginer from "../../components/marginer/index"
import BackgroundImg from "../../assets/images/background.gif";
import { FullName } from "../../components/logo/fullName";
import { ContactBtn } from "../../components/button/contact";
import { DownArrow } from "../../components/arrow/downArrow";
import { Navbar } from "../../components/navbar";


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

const WelcomeText = styled.h1`
    margin: 0;
    font-size: 1.5em;
    color: white;
    font-family: 'League Spartan', sans-serif;
`;
const WelcomeTextCont = styled.h1`
    margin: 0;
    font-size: 1em;
    color: white;
    font-family: 'League Spartan', sans-serif;
    font-weight: 500;
`;

const DownArrowCont = styled.div`
    width: 10%;
    height: 5%;
    position: absolute;
    bottom: 1%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export function TopSection(props){
    return (
    <TopContainer>
        <BackgroundFilter>
            <Navbar />
            <Marginer direction="vertical" margin="26em"/>
            <FullName/>
            {/* <Marginer direction="vertical" margin="3em"/>
            <WelcomeText>Looking for Best?</WelcomeText>
            <Marginer direction="vertical" margin="1em"/>
            <WelcomeTextCont>I believe I can compete.</WelcomeTextCont> */}
            <Marginer direction="vertical" margin="2em"/>
            <ContactBtn> Contact Me</ContactBtn>
            <DownArrowCont>
                <DownArrow/>
            </DownArrowCont>
        </BackgroundFilter>
    </TopContainer>
    )
};