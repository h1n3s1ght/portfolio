import React from "react";
import styled from "styled-components";
import Marginer from "../../../components/marginer/index"
import BackgroundImg from "../../../assets/images/background.gif";
import { FullName } from "../../../components/logo/fullName";
import { ContactBtn } from "../../../components/button/contact";
import { DownArrow } from "../../../components/arrow/downArrow";
import { Navbar } from "../../../components/navbar";
import { DownArrowCont } from "../../../components/arrow/downArrowCont";
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px 0px, rgba(0, 0, 0, 0.3) 0px 8px 16px 0px;
`;

const BackgroundFilter = styled.div`
    width: 100%;
    min-height: 105vh;
    background-color: rgba(43,146,228,.15);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// const DownArrowCont = styled.div`
//     width: 10%;
//     height: 5%;
//     position: absolute;
//     bottom: 1%;
//     left: 50%;
//     transform: translateX(-50%);
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

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