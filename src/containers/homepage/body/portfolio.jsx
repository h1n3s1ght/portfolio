import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { PageTitle } from "../../../components/pageTitle";
import { theme } from "../../../theme";
import Marginer from "../../../components/marginer";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import { PortCard } from "../../../components/portfolioCard";

const PortCont = styled(Element)`
    min-height: 100vh;
    background-image: linear-gradient(180deg, rgba(255,255,255,.8), ${theme.primary});
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export function Portfolio(props) {
    return (
        <PortCont name="Portfolio">
            <PageTitle>
                Portfolio
            </PageTitle>
            <Marginer direction="vertical" margin=".5em"/>
            <CarouselProvider naturalSlideHeight={45} naturalSlideWidth={100} totalSlides={5} visibleSlides={1}>
                <Slider>
                    <Slide index={0}>
                        <PortCard/>
                    </Slide>
                    <Slide index={1}>
                        <PortCard/>
                    </Slide>
                    <Slide index={2}>
                        <PortCard/>
                    </Slide>
                    <Slide index={3}>
                        <PortCard/>
                    </Slide>
                    <Slide index={4}>
                        <PortCard/>
                    </Slide>
                </Slider>
            </CarouselProvider>
        </PortCont>
    );
}