import styled from "styled-components";
import HeaderStyle from "../../ui/HeaderStyle";
import SubtextStyle from "../../ui/SubtextStyle";

const StyledHeader = styled.header`
  padding-top: 6rem;
`;

function Header() {
  return (
    <StyledHeader>
      <main>
        <div>
          <HeaderStyle>
            Hi. I&rsquo;m Karthik. <br />A Developer.
          </HeaderStyle>
          <SubtextStyle>
            I&rsquo;m passionate about crafting experiences that are engaging,
            accessible, and user-centric.
          </SubtextStyle>
        </div>
      </main>
    </StyledHeader>
  );
}

export default Header;
