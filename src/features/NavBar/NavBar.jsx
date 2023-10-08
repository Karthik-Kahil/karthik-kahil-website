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

function NavBar() {
  return (
    <Nav>
      <Ul>
        <li>
          <NavLink to={"/"}>Work</NavLink>
        </li>
        <li>
          <NavLink>About</NavLink>
        </li>
        <li>
          <NavLink>Play</NavLink>
        </li>
        <li>
          <NavLink>Notes</NavLink>
        </li>
        <li>
          <NavLink>Contact</NavLink>
        </li>
      </Ul>
    </Nav>
  );
}

export default NavBar;
