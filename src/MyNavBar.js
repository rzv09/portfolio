import "./styles.css"
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function MyNavBar() {
  return (
<Nav>
  <NavItem>
    <NavLink
      active
      href="/">
      About Me
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="/projects">
      My Projects
    </NavLink>
  </NavItem>
</Nav>
  );
}

export default MyNavBar;