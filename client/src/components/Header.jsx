import { React } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>
          <span>Vigo Firmansyah</span>
          <span>Estate</span>
        </h1>
      </Link>
      <form action="">
        <input type="text" placeholder="Search..." />
      </form>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/signin">
          <li>signin</li>
        </Link>
      </ul>
    </header>
  );
}
