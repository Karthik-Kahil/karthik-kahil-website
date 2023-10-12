import styled from "styled-components";

const HeaderStyle = styled.h2`
  font-family: "AcornBold", Arial, sans-serif;
  font-size: 7rem;
  line-height: 7rem;
  text-align: center;
  color: var(--color-primary-a50);
  &:after {
    content: "👔";
    position: absolute;
  }
  &::before {
    content: "🦄";
    position: absolute;
  }
`;

export default HeaderStyle;
