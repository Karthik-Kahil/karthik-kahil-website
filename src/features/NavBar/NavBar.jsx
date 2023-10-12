import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  font-family: "Poppins", sans-serif;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  z-index: 2;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  text-align: center;
  background-color: var(--color-primary-nav);
  /* padding: 0.8rem 2rem; */
  border-radius: 50px;
  position: relative;

  .animation {
    position: absolute;
    height: 100%;
    top: 80px;
    z-index: 1;
    background: #1abc9c7b;
    border-radius: 8px;
    width: 80px;
    transition: all 0.5s ease 0s;
  }

  li:nth-child(1) {
    width: 80px;
    background-color: antiquewhite;
  }

  li:nth-child(2) {
    background-color: #443522;
    width: 90px;
  }

  li:nth-child(3) {
    background-color: #cf9851;
    width: 70px;
  }

  li:nth-child(4) {
    background-color: #c87507;
    width: 90px;
  }

  li:nth-child(5) {
    background-color: #3e2504;
    width: 90px;
  }

  .start-home,
  li:nth-child(1):hover ~ .animation {
    width: 80px;
    left: 0px;
  }

  li:nth-child(2):hover ~ .animation {
    width: 90px;
    left: 80px;
  }

  li:nth-child(3):hover ~ .animation {
    width: 70px;
    left: 170px;
  }

  li:nth-child(4):hover ~ .animation {
    width: 90px;
    left: 240px;
  }

  li:nth-child(5):hover ~ .animation {
    width: 90px;
    left: 330px;
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
        <div className="animation start-home"></div>
      </Ul>
    </Nav>
  );
}

export default NavBar;
