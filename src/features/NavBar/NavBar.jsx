import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 1.1rem;
  font-family: "Poppins", sans-serif;
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
          <a href="">Work</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Play</a>
        </li>
        <li>
          <a href="">Notes</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </Ul>
    </Nav>
  );
}

export default NavBar;
