import { useState } from "react";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("Fiction");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      title: title,
      author: author,
      genre: genre,
    };

    try {
      const response = await fetch("http://localhost:5000/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBook),
      });

      const data = await response.json();

      alert(`Book Added: ${data.title}`);

      setTitle("");
      setAuthor("");
      setGenre("Fiction");
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book");
    }
  };

  return (
    <div className="page add-book-page">
      <div className="add-book-header">
        <h1>Add a New Book</h1>
        <p><i>Add a book to your BookHub collection.</i></p>
      </div>

      <i><form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label>Book Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. The Alchemist"
            required
          />
        </div>

        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="e.g. Paulo Coelho"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Genre</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
          </select>
        </div>

        <button type="submit" className="add-book-button">
          + Add Book
        </button>
      </form></i>
    </div>
  );
}

export default AddBook;