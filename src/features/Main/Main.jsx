import styled from "styled-components";
import StyledBox from "../../ui/StyledBox";
import StyleBoxGrid from "../../ui/StyleBoxGrid";

const StyledMain = styled.main`
  background: var(--gradient-body-background);
  padding: 5rem 5%;
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
    </StyledMain>
  );
}

export default Main;
