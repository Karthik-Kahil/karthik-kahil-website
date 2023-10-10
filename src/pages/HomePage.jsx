import styled from "styled-components";
import Header from "../features/Header/Header";
import Main from "../features/Main/Main";

const StyledGradient = styled.div`
  background: rgb(217, 225, 213);
  background: var(--gradient-main-background);
`;

function HomePage() {
  return (
    <>
      <StyledGradient>
        <Header />
        <Main />
      </StyledGradient>
    </>
  );
}

export default HomePage;
