import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: var(--color-primary-main);
  display: block;
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
