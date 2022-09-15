import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { scroller } from "react-scroll";
import { useState } from "react";
import OffcanvasMenu from 'react-offcanvas-menu-component';
import { ContactModal, ContactModalTab } from "../../components/modal/contactModal.jsx";

import Resume from "../../assets/resume/BenHines_Resume_Jul2022.pdf"

//=======================================
//====  Styles for Desktop/Tablet  ======
//=======================================

const NavCont = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    color: ${theme.primary};
    list-style: none;
`;

const NavLi = styled.li`
    font-family: 'League Spartan', sans-serif;
    padding: 1.5%;
    margin: .5%;
    
    &:hover {
        border-radius: 10px;
        background-color: rgba(255,255,255,.1);
        color: rgba(204,186,120,1);
    }
`;

const ResumeLink = styled.a`
    text-decoration: none;
    font-family: 'League Spartan', sans-serif;
    color: ${theme.primary};
`;

const scrollToAbout = () => {
    scroller.scrollTo("About", { smooth: true, duration: 1500})
}

const scrollToPort = () => {
    scroller.scrollTo("Portfolio", { smooth: true, duration: 1500})
}


//==============================================
//====  Use to render Desktop Formatting  ======
//==============================================

export function NavLinks(){

const [openModal, setOpenModal] = useState(false);

    return (
        <NavCont>
            <NavLi onClick={scrollToAbout}>About</NavLi>
            <NavLi onClick={scrollToPort}>Portfolio</NavLi>
            {/* <NavLi>Qualifications</NavLi> */}
            <NavLi> 
                <ResumeLink  href={Resume} download> 
                Resume 
                </ResumeLink>
            </NavLi>
            <NavLi className="openModalBtn" onClick={() => {
                setOpenModal(true);
            }} > Contact</NavLi>
            { openModal && <ContactModal closeModal={setOpenModal}/>}
        </NavCont>
    );
};


//=============================================
//====  Use to render Tablet Formatting  ======
//=============================================

export function NavLinksTab(){

const [openModal, setOpenModal] = useState(false);

    return (
        <NavCont>
            <NavLi onClick={scrollToAbout}>About</NavLi>
            <NavLi onClick={scrollToPort}>Portfolio</NavLi>
            <NavLi> 
                <ResumeLink  href={Resume} download> 
                Resume 
                </ResumeLink>
            </NavLi>
            <NavLi className="openModalBtn" onClick={() => {
                setOpenModal(true);
            }} > Contact</NavLi>
            { openModal && <ContactModalTab closeModal={setOpenModal}/>}
        </NavCont>
    );
};

//=============================================
//====  Use to render Mobile Formatting  ======
//=============================================

const NavLiMob = styled.li`
    font-family: 'League Spartan', sans-serif;
    padding: 1.5%;
    margin: .5%;
    color: ${theme.secondary};
    text-transform: uppercase;
    font-weight: bold;
    
    &:hover {
        border-radius: 10px;
        background-color: rgba(255,255,255,.1);
        color: rgba(204,186,120,1);
    }
`;

const ResumeLinkMob = styled.a`
    text-decoration: none;
    font-family: 'League Spartan', sans-serif;
    display: block;
    padding: 1.5%;
    margin: .5%;
    letter-spacing: .1em;
    text-decoration: none;
    color: ${theme.secondary};
    text-transform: uppercase;
    font-weight: bold;
`;

export function NavLinksMob(){

const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <NavLiMob onClick={scrollToAbout}>About</NavLiMob>
            <NavLiMob onClick={scrollToPort}>Portfolio</NavLiMob>
                <ResumeLinkMob  href={Resume} download> 
                Resume 
                </ResumeLinkMob>
            <NavLiMob className="openModalBtn" onClick={() => {
                setOpenModal(true);
            }} > Contact</NavLiMob>
            { openModal && <ContactModalTab closeModal={setOpenModal}/>}
        </>
    );
}