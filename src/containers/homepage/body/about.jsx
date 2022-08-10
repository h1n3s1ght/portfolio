import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { PageTitle } from "../../../components/pageTitle";

const AboutCont = styled(Element)`
    width: 100%;
    min-height: 12%;
    display: flex;
    flex-directions: column;
`;

export function About(props) {
    return (
        <AboutCont name="About">
            <PageTitle> Hi, friend! </PageTitle>
        </AboutCont>
    );
}