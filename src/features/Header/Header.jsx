import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 6rem;
  padding-bottom: 6rem;
`;

const H2 = styled.h2`
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

const P = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  padding-top: 3rem;
  color: var(--color-primary-a30);
`;

function Header() {
  return (
    <StyledHeader>
      <main>
        <div>
          <H2>
            Hi. I&rsquo;m Karthik. <br />A Developer.
          </H2>
          <P>
            I&rsquo;m passionate about crafting experiences that are engaging,
            accessible, and user-centric.
          </P>
        </div>
      </main>
    </StyledHeader>
  );
}

export default Header;
