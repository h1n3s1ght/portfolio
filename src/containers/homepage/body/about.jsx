import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import Marginer from "../../../components/marginer";
import { PageTitle } from "../../../components/pageTitle";
import AboutImg1 from "../../../assets/images/headshot2.jpeg"
import AboutImg2 from "../../../assets/images/Meredith2.jpeg"
import { BodyBlock, BodyBlockTab } from "../../../components/bodyBlock";
import { theme } from "../../../theme";



const AboutCont = styled(Element)`
    width: 100%;
    display: flex;
    background-image: linear-gradient(180deg, ${theme.secondary}, rgba(255,255,255,.8));
    flex-direction: column;
    align-content: center;
    padding: 10px 0;
`;

//==============================================
//====  Use to render Desktop Formatting  ======
//==============================================


export function About(props) {

    return (
        <AboutCont name="About">

            <Marginer direction="vertical" margin="4em"/>

            <PageTitle> Hi, friend! </PageTitle>

            <Marginer direction="vertical" margin="6em"/>

            <BodyBlock style="white-space: pre-line" title="Professional Bio" description='In my early career, I combined forces with and evolved a start-up called Fanvester. In this entrepreneurial venture, I realized success in business was dependent on technology.  This realization was the motivation that sparked an educational journey focused on this essential aspect of future business.' 
            description2="My education started at Miami University.  While at Miami my focuses were on Interactive Media Studies and Interpersonal Communication.  This educational focus helped me to understand how users interact with their technology. The educational journey did not stop there (nor will it ever really end). I sought further software programming skills to have more direct experience in the tech world. Which naturally led me toward a prominent software programming Bootcamp, in General Assembly. Where I recently graduated from their Software Engineering Program."
            description3='While in school I was also seeking further technical experiences through internships, custom work projects, and working for Apple as a Technical and Business Expert. I am always looking to further my education and work experiences. If you would like to know more, please, do not hesitate to reach out.' 
             imgUrl={AboutImg1} />

            <Marginer direction="vertical" margin="12em"/>

            <BodyBlock isRev title="Who am I?" description="Well, I am a Cincinnati man (born and raised).  I am a huge Cincinnati sports fan.  GO BENGALS, REDS, and BEARCATS.  I currently live in Nashville, TN with my lovely fiancè, Meredith (pictured below). I love spending time outdoors, learning new things, cooking, or spending time with a ball in my hand (football, basketball, baseball, tennis, etc.). I guess you could say I am a simple guy who like the simple things.  I enjoy a coffee in the morning with my fiancè, walks with the dog, camping, spending time with family, etc. " description2='I am very passionate about our planet.  I think many of our daily problems can be solved by spending more time outdoors. I have recently taken up gardening as a hobby.  This has been therapeutic in addition to the health benefits of eat a more natural diet that we harvest from it. I really hope that I am able to leave this planet better than I found it.' description3='In addition to the planet, I am also very passionate about mental health.  As I mentioned above, I believe these may have a large correlation.  I hope to help be an ally to those who struggle with mental health issues and help them to seek the proper resources. If you would like to know more about me, do not hesitate to reach out.  Just click the contact button and fill out the form.' imgUrl={AboutImg2} />

            <Marginer direction="vertical" margin="9em"/>
        </AboutCont>
    );
}


//==============================================
//====  Use to render Tablet Formatting  =======
//==============================================

const AboutContTab = styled(Element)`
    width: 100%;
    display: flex;
    background-image: linear-gradient(180deg, ${theme.secondary}, rgba(255,255,255,.8));
    flex-direction: column;
    align-content: center;
    padding: 10px 0;
`;

export function AboutTab(props) {

    return (
        <AboutContTab name="About">

            <Marginer direction="vertical" margin="4em"/>

            <PageTitle> Hi, friend! </PageTitle>

            <Marginer direction="vertical" margin="4em"/>

            <BodyBlockTab style="white-space: pre-line" title="Professional Bio" description='In my early career, I combined forces with and evolved a start-up called Fanvester. In this entrepreneurial venture, I realized success in business was dependent on technology.  This realization was the motivation that sparked an educational journey focused on this essential aspect of future business.' 
            description2="My education started at Miami University.  While at Miami my focuses were on Interactive Media Studies and Interpersonal Communication.  This educational focus helped me to understand how users interact with their technology. The educational journey did not stop there (nor will it ever really end). I sought further software programming skills to have more direct experience in the tech world. Which naturally led me toward a prominent software programming Bootcamp, in General Assembly. Where I recently graduated from their Software Engineering Program."
            description3='While in school I was also seeking further technical experiences through internships, custom work projects, and working for Apple as a Technical and Business Expert. I am always looking to further my education and work experiences. If you would like to know more, please, do not hesitate to reach out.'
             imgUrl={AboutImg1} />

            <Marginer direction="vertical" margin="9em"/>

            <BodyBlockTab title="Who am I?" description="Well, I am a Cincinnati man (born and raised).  I am a huge Cincinnati sports fan.  GO BENGALS, REDS, and BEARCATS.  I currently live in Nashville, TN with my lovely fiancè, Meredith (pictured below). I love spending time outdoors, learning new things, cooking, or spending time with a ball in my hand (football, basketball, baseball, tennis, etc.). I guess you could say I am a simple guy who like the simple things.  I enjoy a coffee in the morning with my fiancè, walks with the dog, camping, spending time with family, etc. " description2='I am very passionate about our planet.  I think many of our daily problems can be solved by spending more time outdoors. I have recently taken up gardening as a hobby.  This has been therapeutic in addition to the health benefits of eat a more natural diet that we harvest from it. I really hope that I am able to leave this planet better than I found it.' description3='In addition to the planet, I am also very passionate about mental health.  As I mentioned above, I believe these may have a large correlation.  I hope to help be an ally to those who struggle with mental health issues and help them to seek the proper resources. If you would like to know more about me, do not hesitate to reach out.  Just click the contact button and fill out the form.'imgUrl={AboutImg2} />

            <Marginer direction="vertical" margin="9em"/>
        </AboutContTab>
    );
}