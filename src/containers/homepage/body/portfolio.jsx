import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { PageTitle } from "../../../components/pageTitle";
import { theme } from "../../../theme";
import Marginer from "../../../components/marginer";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { PortCard } from "../../../components/portfolioCard";

import SnowBall from "../../../assets/images/Snowball_debt.png";
import WhatToEat from "../../../assets/images/What_to_eat.jpeg";
import PlanIt from "../../../assets/images/Plan_it.jpeg";

const PortCont = styled(Element)`
  min-height: 100vh;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8),
    ${theme.primary}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyCarProv = styled(CarouselProvider)`
  min-height: 75vh;
`;

const StySli = styled(Slide)`
  min-height: 80vh;
  width: 78%;
`;

const StyDot = styled(DotGroup)`
  display: flex;
  justify-content: center;

  button {
    z-index: 1005;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-top: 0%;
    margin-bottom: 4%;
    padding: 0;
    background-color: white;
    border: 0px solid ${theme.secondary};
    &:not(:last-of-type) {
      margin-right: 4px;
    }
  }

  .carousel__dot--selected {
    background-color: ${theme.secondary_light} !important;
  }
`;

export function Portfolio(props) {
  return (
    <PortCont name="Portfolio">
      <PageTitle>Portfolio</PageTitle>

      <Marginer direction="vertical" margin=".5em" />

      <StyCarProv
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
        visibleSlides={1}
      >
        <Slider>
          <StySli index={0}>
            <PortCard
              title="Snowball Debt Calculator"
              imgUrl={SnowBall}
              description='When looking at debt as a whole we here think it is best to have an easy tool to help you manage your payment plans. We use the "Snowball Method" here on our platform. What is the "Snowball Method"? The "snowball method," simply put, means paying off the smallest of all your loans as quickly as possible. Once that debt is paid, you take the money you were putting toward that payment and roll it onto the next-smallest debt owed. Ideally, this process would continue until all accounts are paid off. As you roll the money used from the smallest balance to the next on your list, the amount “snowballs” and gets larger and larger and the rate of the debt that is reduced is accelerated.'
              link="https://snowball-debt-calc.herokuapp.com/"
            />
          </StySli>
          <StySli index={1}>
            <PortCard title="What To Eat" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            imgUrl={WhatToEat}
            link="https://what-to-eat-api-site.herokuapp.com/recipes"
            />
          </StySli>
          <StySli index={2}>
            <PortCard title="Plan It Travel" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            imgUrl={PlanIt} 
            link='https://planit-t.herokuapp.com/'/>
          </StySli>
        </Slider>
        <StyDot />
      </StyCarProv>
    </PortCont>
  );
}
