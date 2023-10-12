import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import styled from "styled-components";
import Footer from "./Footer/Footer";

const StyledHeader = styled.div`
  background: rgb(217, 225, 213);
  background: var(--gradient-main-background);
`;

function AppLayout() {
  return (
    <StyledHeader>
      <NavBar />
      <Outlet />
      <Footer />
    </StyledHeader>
  );
}

export default AppLayout;
