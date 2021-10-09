import React from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { Marginer } from "../marginer";

const CardContainer = styled.div`
  // width: 350px;
  // height: 300px;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
  margin: 5px 0;
  position: relative;
  padding: 10px 1.2em;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 17px;
  color: #d1d1d1;
  font-size: 37px;
`;

const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 15px;
  color: #000;
`;

export function ReviewCard(props) {
  const { reviewText, username, userImgUrl } = props;
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  let style = {};
  if (!isNotMobile) {
    style.width = 300;
    style.height = 300;
  }
  return (
    <CardContainer style={style}>
      {/* <QuoteIcon>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </QuoteIcon>
      <Marginer direction="vertical" margin="6em" />
      <ReviewText>{reviewText}</ReviewText>
    <Line /> */}
      <img src={userImgUrl} />
    </CardContainer>
  );
}
