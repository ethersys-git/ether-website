import React from "react";
import styled, { css } from "styled-components";
import { logo } from "../../assets/images";

import { theme } from "../../theme";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? "row" : "column")};
  align-items: center;
`;

const LogoImg = styled.img`
  width: 12em;
  height: 4em;

  ${({ inline }) =>
    inline &&
    css`
      width: 120px;
      height: 24px;
      margin-right: 6px;
    `};

  ${({ small }) =>
    small &&
    css`
      width: 4.8em;
      height: 4.8em;
    `};
`;

const LogoText = styled.div`
  margin-top: ${({ inline }) => (inline ? 0 : "6px")};
  font-size: ${({ inline, small }) =>
    inline ? "18px" : small ? "23px" : "40px"};
  color: ${({ inline }) => (inline ? "#fff" : theme.primary)};
  font-weight: 900;
`;

export function Logo(props) {
  const { inline, small } = props;

  return (
    <LogoContainer inline={inline} small={small}>
      <LogoImg src={logo} inline={inline} small={small} />
    </LogoContainer>
  );
}
