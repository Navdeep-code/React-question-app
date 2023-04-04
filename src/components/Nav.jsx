import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav id="main-nav" aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}