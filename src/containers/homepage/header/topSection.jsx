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
import { useState } from "react";
import ContactModal from "../../../components/modal/contactModal.jsx";


//=== If Initials Are Needed ===
//==============================
// import { Logo } from "../../components/logo/index";
//==============================


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
                <Marginer direction="vertical" margin="20em"/>
                <FullName/>
                <Marginer direction="vertical" margin="2em"/>
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