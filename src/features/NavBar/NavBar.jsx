import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  font-family: "Poppins", sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  z-index: 999;
  width: 100%;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  list-style: none;
  background-color: var(--color-primary-nav);
  padding: 1rem 3rem;
  border-radius: 50px;

  .active {
    background-color: var(--color-primary-main);
    padding: 0.5rem 1rem;
    border-radius: 50px;
  }
`;

function NavBar() {
  return (
    <Nav>
      <Ul>
        <li>
          <NavLink to={"/"}>Work</NavLink>
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
          <NavLink to={"/s"}>Contact</NavLink>
        </li>
      </Ul>
    </Nav>
  );
}

export default NavBar;
