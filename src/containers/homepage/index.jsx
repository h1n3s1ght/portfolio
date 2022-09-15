import React from "react";  
import styled from "styled-components";
import { MainBody, MainBodyTab, MainBodyMob } from "./body/mainBody";
import { TopSection, TopSectionTab, TopSectionMob } from "./header/topSection";
import { Footer, FooterTab, FooterMob } from "./footer/footer";
import useMediaQuery from "../../components/MediaQuery/useMediaQuery";
import { Hamburger } from "../../components/navbar/hamburger";

const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'League Spartan', sans-serif;
`;

export function Homepage(props){

const Desktop = (
    <PageContainer>
        <TopSection/>
        <MainBody/>
        <Footer/>
    </PageContainer>
);

const Tablet = (
    <PageContainer>
        <TopSectionTab/>
        <MainBodyTab/>
        <FooterTab/>
    </PageContainer>
);

const Mobile = (
    <PageContainer>
        <Hamburger/>
        <TopSectionMob/>
        <MainBodyMob/>
        <FooterMob/>
    </PageContainer>
)

const isDesktop = useMediaQuery('(min-width: 1400px)');
const isTablet = useMediaQuery('(min-width: 820px)');

    return (
        <>
            {isDesktop ? Desktop : (isTablet ? Tablet : Mobile)}
        </>
    );
}