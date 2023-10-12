import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  background-color: var(--color-primary-a30);
  padding: 7px 20px;
  border-radius: 20px;
`;

function NavBar() {
  return (
    <Nav>
      <Ul>
        <li>
          <StyledNavLink to={"/"}>Work</StyledNavLink>
        </li>
        <li>
          <NavLink to={"about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"play"}>Play</NavLink>
        </li>
        <li>
          <NavLink to={"notes"}>Notes</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
      </Ul>
    </Nav>
  );
}

export default NavBar;
