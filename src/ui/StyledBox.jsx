import styled from "styled-components";

const StyledBoxs = styled.div`
  overflow: hidden;
  text-align: right;
  padding: 2rem;
  height: 100%;
  border-radius: 50px;

  background-color: var(${(props) => props.color});

  & p {
    font-family: "Poppins", sans-serif;
    color: #364442;
    letter-spacing: 4px;
  }

  & h2 {
    font-family: "AcornRegular", Arial, sans-serif;
    color: #364442;
    font-size: 3rem;
  }

  & img {
    width: 100%;
    height: 100%;
  }

  & div {
    padding-bottom: 3rem;
  }
`;

// eslint-disable-next-line react/prop-types
const StyledBox = ({ para, header, imgLink, color }) => {
  return (
    <StyledBoxs color={color}>
      <div>
        <p>{para}</p>
        <h2>{header}</h2>
      </div>
      <img src={imgLink} alt="" />
    </StyledBoxs>
  );
};

export default StyledBox;
