import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>BookHub</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;