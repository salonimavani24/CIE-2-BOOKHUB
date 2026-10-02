import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Favorites from "./pages/Favorites";
import AddBook from "./pages/AddBook";

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (book) => {
    const exists = favorites.some((item) => item.id === book.id);

    if (exists) {
      setFavorites(
        favorites.filter((item) => item.id !== book.id)
      );
    } else {
      setFavorites([...favorites, book]);
    }
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/books"
          element={
            <Books
              favorites={favorites}
              onToggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />

        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;