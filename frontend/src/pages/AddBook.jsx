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
    <div>
      <h1>Add a Book</h1>

      <form onSubmit={handleSubmit}>
        <div className="page">
          <label>Book Title </label>
          <br/>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
            required
          />
        </div>

        <br />

        <div>
          <label>Author</label>
          <br />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            required
          />
        </div>

        <br />

        <div>
          <label>Genre</label>
          <br />
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="Fiction">Fiction</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Mystery">Mystery</option>
          </select>
        </div>

        <br />

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;