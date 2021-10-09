import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";
import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";

import { Carousel } from "react-responsive-carousel";

const ReviewsContainer = styled(Element)`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
`;

const StyledCarouselProvider = styled(Carousel)`
  width: 50%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: 20px;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }

  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

export function ReviewsSection(props) {
  const isNotMobile = useMediaQuery({ minWidth: 768 });

  return (
    <ReviewsContainer>
      <SectionTitle>Our Clients</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        showThumbs={false}
        autoPlay
        showArrows
        interval={1500}
        infiniteLoop
        // width={isNotMobile ? 400 : 300}
        centerMode
      >
        {props.images.map((item) => {
          return <img src={item} style={{ width: 200, height: 200 }} />;
        })}
      </StyledCarouselProvider>

      {/* <StyledCarouselProvider
        naturalSlideWidth={!isNotMobile ? 200 : 300}
        naturalSlideHeight={!isNotMobile ? 150 : 205}
        totalSlides={5}
        visibleSlides={!isNotMobile ? 1 : 3}
        dragEnabled={true}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              // reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              // username="John coner"
              userImgUrl={costumer1}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              // reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              // username="John coner"
              userImgUrl={costumer2}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              // reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              // username="John coner"
              userImgUrl={costumer3}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <ReviewCard
              // reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              // username="John coner"
              userImgUrl={costumer4}
            />
          </StyledSlide>

          <StyledSlide index={4}>
            <ReviewCard
              // reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              // username="John coner"
              userImgUrl={costumer5}
            />
          </StyledSlide>
        </Slider>
        <Marginer margin={"2em"} />
        <StyledDotGroup />
      </StyledCarouselProvider> */}
    </ReviewsContainer>
  );
}
