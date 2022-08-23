import React from "react";  
import styled from "styled-components";
import { MainBody, MainBodyTab } from "./body/mainBody";
import { TopSection, TopSectionTab, TopSectionMob } from "./header/topSection";
import { Footer, FooterTab } from "./footer/footer";
import useMediaQuery from "../../components/MediaQuery/useMediaQuery";

// import { useMediaQuery } from "react-responsive";

const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'League Spartan', sans-serif;
`;


// const Desktop = ({children}) => {
//     const isComp = useMediaQuery({minWidth: 1400});
//     return isComp ? children : null ;
// }

// const Tablet = ({children}) => {
//     const isTab = useMediaQuery({minWidth: 820, maxWidth: 1399});
//     return isTab ? children : null;
// }

// const Mobile = ({children}) => {
// const isPhone = useMediaQuery({maxWidth: 350});

// }

// const Default = ({children}) => {
// const isDefault = useMediaQuery({minWidth: 355});

// }

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
        {/* <FooterTab/> */}
    </PageContainer>
);

const Mobile = (
    <PageContainer>
        <MainBody />
        <Footer />
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