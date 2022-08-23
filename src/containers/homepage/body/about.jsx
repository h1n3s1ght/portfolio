import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import Marginer from "../../../components/marginer";
import { PageTitle } from "../../../components/pageTitle";
import AboutImg1 from "../../../assets/images/headshot2.jpeg"
import AboutImg2 from "../../../assets/images/Meredith2.jpeg"
import { BodyBlock } from "../../../components/bodyBlock";
import { theme } from "../../../theme";



const AboutCont = styled(Element)`
    width: 100%;
    display: flex;
    background-image: linear-gradient(180deg, ${theme.secondary}, rgba(255,255,255,.8));
    flex-direction: column;
    align-content: center;
    padding: 10px 0;
`;


export function About(props) {

    return (
        <AboutCont name="About">

            <Marginer direction="vertical" margin="4em"/>

            <PageTitle> Hi, friend! </PageTitle>

            <Marginer direction="vertical" margin="6em"/>

            <BodyBlock style="white-space: pre-line" title="Professional Bio" description='In my early career, I combined forces with and evolved a start-up called Fanvester. In this entreprenuerial venture, I realized success in business was dependent on technology.  This realization was the motivation that sparked an educational journey focused around this essential aspect of future business.' 
             imgUrl={AboutImg1} />

            <Marginer direction="vertical" margin="12em"/>

            <BodyBlock isRev title="My Passions" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." imgUrl={AboutImg2} />

            <Marginer direction="vertical" margin="9em"/>
        </AboutCont>
    );
}


// description={`${ProBioP1}  ${ProBioP2} ${ProBioP3}`}