import React from "react";
import styled from "styled-components";
import Marginer from "../../../components/marginer/index"
import BackgroundImg from "../../../assets/images/background.gif";
import { FullName } from "../../../components/logo/fullName";
import { ContactBtn } from "../../../components/button/contact";
import { DownArrow, DownArrowMob } from "../../../components/arrow/downArrow";
import { Navbar, NavbarTab } from "../../../components/navbar";
import { DownArrowCont, DownArrowContMob, DownArrowContTab } from "../../../components/arrow/downArrowCont";
import { Element, scroller } from "react-scroll";
import { useState } from "react";
import { ContactModal, ContactModalTab } from "../../../components/modal/contactModal";
import { Hamburger } from "../../../components/navbar/hamburger";



//==============================================
//====  Use to render Desktop Formatting  ======
//==============================================

const TopContainer = styled(Element)`
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

export function TopSection(props){

const [openModal, setOpenModal] = useState(false);

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
                <Marginer direction="vertical" margin="18em"/>
                <FullName/>
                <Marginer direction="vertical" margin="1.25em"/>
                <ContactBtn className="openModalBtn" onClick={() => {
                setOpenModal(true);
            }}> Contact Me</ContactBtn>
                <DownArrowCont onClick={scrollToNextPage}>
                    <DownArrow/>
                </DownArrowCont>
                { openModal && <ContactModal closeModal={setOpenModal}/>}
            </BackgroundFilter>
        </TopContainer>
    </Element>
    )
};


//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

const TopContainerTab = styled(Element)`
    width: 100%;
    min-height: 105vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    background-size: cover;
`;

const BackgroundFilterTab = styled.div`
    width: 100%;
    min-height: 105vh;
    background-color: rgba(43,146,228,.15);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export function TopSectionTab(){

const [openModal, setOpenModal] = useState(false);

    // Write function for scrolling
    //=============================

    const scrollToNextPage = () => {
        scroller.scrollTo("About", { smooth: true, duration: 1200})
    }

    return (
    <Element name="home">
        <TopContainer>
            <BackgroundFilter>
                <NavbarTab />
                <Marginer direction="vertical" margin="14em"/>
                <FullName/>
                <Marginer direction="vertical" margin="1.5em"/>
                <ContactBtn className="openModalBtn" onClick={() => {
                setOpenModal(true);
            }}> Contact Me</ContactBtn>
                <DownArrowContTab onClick={scrollToNextPage}>
                    <DownArrow/>
                </DownArrowContTab>
                { openModal && <ContactModalTab closeModal={setOpenModal}/>}
            </BackgroundFilter>
        </TopContainer>
    </Element>
    )
};



//==============================================
//====  Use to render Mobile Formatting  =======
//==============================================

const TopContainerMob = styled(Element)`
    width: 100vw;
    min-height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    background-size: cover;
`;

const BackgroundFilterMob = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(43,146,228,.15);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export function TopSectionMob(){

const [openModal, setOpenModal] = useState(false);

    // Write function for scrolling
    //=============================

    const scrollToNextPage = () => {
        scroller.scrollTo("About", { smooth: true, duration: 1200})
    }

    return (
    <Element name="home">
        <TopContainerMob>
            <BackgroundFilterMob>
                <Marginer direction="vertical" margin="18em"/>
                <FullName/>
                <Marginer direction="vertical" margin="1em"/>
                <ContactBtn className="openModalBtn" onClick={() => {
                setOpenModal(true);
            }}> Contact Me</ContactBtn>
                <DownArrowContMob onClick={scrollToNextPage}>
                    <DownArrowMob/>
                </DownArrowContMob>
                { openModal && <contactModal closeModal={setOpenModal}/>}
            </BackgroundFilterMob>
        </TopContainerMob>
    </Element>
    )
};