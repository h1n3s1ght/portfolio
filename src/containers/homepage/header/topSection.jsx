import React from "react";
import styled from "styled-components";
import Marginer from "../../../components/marginer/index"
import BackgroundImg from "../../../assets/images/background.gif";
import { FullName } from "../../../components/logo/fullName";
import { ContactBtn } from "../../../components/button/contact";
import { DownArrow } from "../../../components/arrow/downArrow";
import { Navbar } from "../../../components/navbar";
import { Element, scroller } from "react-scroll";


//=== If Initials Are Needed ===
//==============================
// import { Logo } from "../../components/logo/index";
//==============================


const TopContainer = styled.div`
    width: 100%;
    min-height: 105vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    background-size: cover;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    min-height: 105vh;
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

    // Write function for scrolling
    //=============================

    const scrollToNextPage = () => {
        scroller.scrollTo("About", { smooth: true, duration: 1200})
    }

    return (
    <Element name="home">
        <TopContainer>
            <BackgroundFilter>
                <Navbar />
                <Marginer direction="vertical" margin="20em"/>
                <FullName/>
                <Marginer direction="vertical" margin="2em"/>
                <ContactBtn> Contact Me</ContactBtn>
                <DownArrowCont onClick={scrollToNextPage}>
                    <DownArrow/>
                </DownArrowCont>
            </BackgroundFilter>
        </TopContainer>
    </Element>
    )
};