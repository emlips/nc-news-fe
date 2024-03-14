import { Link } from "react-router-dom";

function Header({setCurrTopic}) {
  return (
    <nav>
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/articles" onClick={() => setCurrTopic(undefined)}>
        Articles
      </Link>
    </nav>
  );
}

export default Header;
