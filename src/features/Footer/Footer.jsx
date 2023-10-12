import styled from "styled-components";
import FooterLinks from "./FooterLinks";

const StyledFooter = styled.div`
  & h2 {
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--color-primary-a60);
    margin-bottom: 1.5rem;
  }
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

const FooterGrid = styled.footer`
  display: grid;
  grid-template-columns: 200px 1fr auto;
  padding: 0 10%;
  background: var(--color-primary-main);
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-primary-a60);
  margin-bottom: 1.5rem;
`;

function Footer() {
  return (
    <FooterGrid>
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
      <StyledFooter>
        <h2>Projects</h2>
        <ul>
          <FooterLinks>Case Converter</FooterLinks>
          <FooterLinks>Emi Calculator</FooterLinks>
          <FooterLinks>Video Downloader</FooterLinks>
          <FooterLinks>CV</FooterLinks>
          <FooterLinks>LinkedIn</FooterLinks>
        </ul>
      </StyledFooter>
      <StyledFooter>
        <h2>Contact</h2>
        <ul>
          <FooterLinks>Message</FooterLinks>
        </ul>
      </StyledFooter>
      <Description>© 2023 Seán Halpin • Colophon</Description>
    </FooterGrid>
  );
}

export default Footer;
