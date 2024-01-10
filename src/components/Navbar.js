import "./Navbar.css";
import Search from "./Search";
import Logo from "./logo";

function Navbar() {
  return (
    <nav>
      <Logo />
      <Search />
      <button className="nav-btn">Give Feedback</button>
    </nav>
  );
}

export default Navbar;
