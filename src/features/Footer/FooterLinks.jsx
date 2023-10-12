import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-primary-a30);
  line-height: 2.5rem;
  list-style: none;
`;

// eslint-disable-next-line react/prop-types
function FooterLinks({ children }) {
  return (
    <List>
      <Link to="/">{children}</Link>
    </List>
  );
}

export default FooterLinks;
