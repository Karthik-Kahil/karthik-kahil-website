import styled from "styled-components";
import StyledBox from "../../ui/StyledBox";
import StyleBoxGrid from "../../ui/StyleBoxGrid";
import HeaderStyle from "../../ui/HeaderStyle";
import SubtextStyle from "../../ui/SubtextStyle";

const StyledMain = styled.main`
  background: var(--gradient-body-background);
  padding: 0 2% 3rem 2%;
`;

function Main() {
  return (
    <StyledMain>
      <StyleBoxGrid type="left">
        <StyledBox
          color={"--color--secondary-1"}
          para={"HELP SCOUT"}
          header={"AI"}
          imgLink={"https://www.seanhalpin.xyz/work/docs/docs-hero@2x.png"}
        />
        <StyledBox
          color={"--color--secondary-2"}
          para={"HELP SCOUT"}
          header={"Articles"}
          imgLink={"https://www.seanhalpin.xyz/work/docs/docs-hero@2x.png"}
        />
      </StyleBoxGrid>

      <StyleBoxGrid type="right">
        <StyledBox
          color={"--color--secondary-3"}
          para={"FIGMA"}
          header={"Plugins"}
          imgLink={"https://www.seanhalpin.xyz/work/docs/docs-hero@2x.png"}
        />
        <StyledBox
          color={"--color--secondary-4"}
          para={"HELP SCOUT"}
          header={"Mobile"}
          imgLink={
            "https://www.seanhalpin.xyz/work/mobile/mobile-header_01@2x.png"
          }
        />
      </StyleBoxGrid>

      <HeaderStyle>In Progress.</HeaderStyle>
      <SubtextStyle>
        Work in various states of design and development, from side projects, to
        in-flight product design and development.
      </SubtextStyle>

      <StyleBoxGrid type="right">
        <StyledBox
          color={"--color-primary-a0"}
          para={"MULTIPLAYER"}
          header={"Doodler"}
          imgLink={"https://www.seanhalpin.xyz/work/docs/docs-hero@2x.png"}
        />
        <StyledBox
          color={"--color-primary-a90"}
          para={"MOBILE"}
          header={"Dark Mode"}
          whiteText={"whiteText"}
          imgLink={"https://www.seanhalpin.xyz/work/hsdm/darkmode_01@2x.png"}
        />
      </StyleBoxGrid>
    </StyledMain>
  );
}

export default Main;
