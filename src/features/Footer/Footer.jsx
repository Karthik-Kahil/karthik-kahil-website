import styled from "styled-components";
import FooterLinks from "./FooterLinks";

const StyledFooter = styled.div`
  background: var(--gradient-body-background);
  margin-top: 5rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <h2>Elsewhere</h2>
      <ul>
        <FooterLinks>Figma</FooterLinks>
        <FooterLinks>Github</FooterLinks>
        <FooterLinks>Post</FooterLinks>
        <FooterLinks>CV</FooterLinks>
        <FooterLinks>LinkedIn</FooterLinks>
      </ul>
    </StyledFooter>
  );
}

export default Footer;
