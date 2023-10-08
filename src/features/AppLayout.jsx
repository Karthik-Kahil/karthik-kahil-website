import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import styled from "styled-components";

const StyledHeader = styled.div`
  background: rgb(217, 225, 213);
  background: var(--gradient-main-background);
`;

function AppLayout() {
  return (
    <StyledHeader>
      <NavBar />
      <Outlet />
    </StyledHeader>
  );
}

export default AppLayout;
