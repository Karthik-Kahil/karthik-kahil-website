import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  width: 100%;
  height: 400px;
  grid-template-columns: 0.6fr 1fr;
  grid-template-rows: 500px 500px;
  grid-gap: 50px;
`;

const StyledBoxMini = styled.div`
  background-color: #d094e5;
  overflow: hidden;
  text-align: right;
  padding: 2rem;
  height: 100%;
  border-radius: 50px;
`;

const P = styled.p`
  font-family: "Poppins", sans-serif;
  color: #364442;
  letter-spacing: 4px;
`;

const H2 = styled.h2`
  font-family: "AcornRegular", Arial, sans-serif;
  color: #364442;
  font-size: 3rem;
`;

const StyledBoxLarge = styled.div`
  background-color: #a3dbd4;
  overflow: hidden;
  text-align: right;
  padding: 2rem;
  height: 100%;
  border-radius: 50px;
`;

function Main() {
  return (
    <StyledMain>
      <StyledBoxMini>
        <P>HELP SCOUT</P>
        <H2>AI</H2>
        <img src="https://www.seanhalpin.xyz/work/ai/ai-hero@2x.png" alt="" />
      </StyledBoxMini>
      <StyledBoxLarge>
        <P>HELP SCOUT</P>
        <H2>Ariticles</H2>
        <img src="https://www.seanhalpin.xyz/work/ai/ai-hero@2x.png" alt="" />
      </StyledBoxLarge>
    </StyledMain>
  );
}

export default Main;
