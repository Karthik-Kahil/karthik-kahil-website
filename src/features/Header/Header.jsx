import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "AcornRegular", Arial, sans-serif;
`;

const H2 = styled.h2`
  font-size: 3rem;
  text-align: center;
`;

function Header() {
  return (
    <StyledHeader>
      <main>
        <div>
          <H2>
            <span>Hi. I'm Karthik Kahil. </span>
            <span>A Full Stack Developer</span>
          </H2>
        </div>
      </main>
    </StyledHeader>
  );
}

export default Header;
