const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
  },
  {
    id: 3,
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fantasy",
  },
  {
  id: 4,
  title: "The Fault in Our Stars",
  author: "John Green",
  genre: "Romance",
  },
];

app.get("/", (req, res) => {
  res.send("BookHub Backend is running!");
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

app.listen(5000, () => {
  console.log("BookHub Backend running on http://localhost:5000");
});