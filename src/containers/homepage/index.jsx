import React from "react";  
import styled from "styled-components";
import { About } from "./body/about";
import { TopSection } from "./header/topSection";

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
            <About/>
        </PageContainer>
    );
}