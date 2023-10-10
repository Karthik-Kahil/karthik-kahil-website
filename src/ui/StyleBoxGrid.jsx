import styled, { css } from "styled-components";

const StyleBoxGrid = styled.div`
  display: grid;

  ${(props) =>
    props.type === "left" &&
    css`
      grid-template-columns: 0.6fr 1fr;
    `}

  ${(props) =>
    props.type === "right" &&
    css`
      grid-template-columns: 1fr 0.6fr;
    `}

  grid-template-rows: 500px 500px;
  grid-gap: 50px;
`;

export default StyleBoxGrid;
