import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/" className="logo">
        <div>
          <strong>BookHub</strong>
          <small>your little library</small>
        </div>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/add-book">
        Add Book
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;