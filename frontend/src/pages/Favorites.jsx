function Favorites({ favorites }) {
  return (
    <div className="page">
      <h1>My Favorites</h1>

      {favorites.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        <div className="book-grid">
          {favorites.map((book) => (
            <div className="book-card" key={book.id}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;