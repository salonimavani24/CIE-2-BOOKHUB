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
    <div className="page">
      <h1>All Books</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <option value="All">All Genres</option>
          <option value="Fiction">Fiction</option>
          <option value="Self-Help">Self-Help</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Mystery">Mystery</option>
        </select>
      </div>

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

      <BookStats
        totalBooks={books.length}
        genres="Fiction, Self-Help, Fantasy"
      />
    </div>
  );
}

export default Books;