import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";

import { Navbar } from "../../components/navbar";
import { Carousel } from "react-responsive-carousel";
import {
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
  carousel6,
} from "../../assets/images";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 34px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
  text-align: center;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  const scrollToNextSection = () => {
    scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
  };
  const images = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6,
  ];

  return (
    <Element name="topSection">
      <TopContainer>
        <Navbar />
        <Carousel autoPlay showThumbs={false}>
          {images.map((item) => {
            return (
              <img src={item} style={{ width: "100%", height: "100vh" }} />
            );
          })}
        </Carousel>
        {/* <Marginer direction="vertical" margin="8em" />
          <Logo /> */}
        {/* <Marginer direction="vertical" margin="4em" />
          <MotivationalText>Software Development</MotivationalText>
          <MotivationalText>From the Best in the Industry</MotivationalText>
          <Marginer direction="vertical" margin="2em" /> */}

        {/* <Button>Start your Project</Button>
          <DownArrowContainer onClick={scrollToNextSection}>
            <DownArrow />
          </DownArrowContainer> */}
      </TopContainer>
    </Element>
  );
}
