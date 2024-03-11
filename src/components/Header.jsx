import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/articles">
        Articles
      </Link>
    </nav>
  );
}

export default Header;
