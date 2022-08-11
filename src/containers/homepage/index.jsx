import React from "react";  
import styled from "styled-components";
import { MainBody } from "./body/mainBody";
import { TopSection } from "./header/topSection";
import { Footer } from "./footer/footer";

const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'League Spartan', sans-serif;
`;


export function Homepage(props){
    return (
        <PageContainer>
            <TopSection/>
            <MainBody/>
            <Footer/>
        </PageContainer>
    );
}