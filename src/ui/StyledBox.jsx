import styled from "styled-components";

const StyledBoxs = styled.div`
  overflow: hidden;
  text-align: right;
  padding: 2rem;
  height: 100%;
  border-radius: 50px;
  cursor: pointer;
  background-color: var(${(props) => props.color});
  transition: all 0.5s ease;
  color: ${(props) =>
    props.whiteText === "whiteText" ? `#ffffff` : `#364442`};

  &:hover {
    img {
      transform: translateY(20px);
      transition: all 0.5s ease;
    }
    transform: translateY(-10px);

    -webkit-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.1);
  }

  & p {
    font-family: "Poppins", sans-serif;
    color: ${(props) =>
      props.whiteText === "whiteText" ? `#ffffff` : `#364442`};
    letter-spacing: 4px;
  }

  & h2 {
    font-family: "AcornRegular", Arial, sans-serif;
    color: ${(props) =>
      props.whiteText === "whiteText" ? `#ffffff` : `#364442`};
    font-size: 3rem;
  }

  & img {
    position: relative;
    width: 100%;
    height: auto;
    bottom: 0px;
    transition: all 0.5s ease;
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
