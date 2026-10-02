import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import BookStats from "../components/BookStats";

function Books({ favorites, onToggleFavorite }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    document.title = "BookHub - Books";

    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) =>
        console.error("Error fetching books:", error)
      );
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      genre === "All" || book.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="page books-page">
      <div className="books-header">
        <div>
          <span className="section-label">YOUR COLLECTION</span>
          <h1>Explore Books</h1>
          <p><i>Find your next read.</i></p>
        </div>

        <div className="book-count">
          <strong>{filteredBooks.length}</strong>
          <span>Books Found</span>
        </div>
      </div>

      <div className="search-container">
        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search by book title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="All">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
        </select>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              genre={book.genre}
              isFavorite={favorites.some(
                (item) => item.id === book.id
              )}
              onToggleFavorite={() => onToggleFavorite(book)}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No books found</h3>
          <p>Try a different search or genre.</p>
        </div>
      )}

      <BookStats
        totalBooks={books.length}
        genres="Fiction, Self-Help, Fantasy, Mystery"
      />
    </div>
  );
}

export default Books;