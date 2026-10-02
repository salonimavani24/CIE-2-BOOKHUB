function Favorites({ favorites }) {
  return (
    <div className="page favorites-page">
      <div className="favorites-header">
        <h1>My Favorites</h1>
        <p><i>Books you've chosen to keep close.</i></p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <i><h3>No favorites yet</h3>
          <p>Go to Books and add something you love.</p></i>
        </div>
      ) : (
        <>
          <div className="favorites-count">
            ♥ {favorites.length}{" "}
            {favorites.length === 1 ? "favorite" : "favorites"}
          </div>

          <div className="book-grid">
            {favorites.map((book) => (
              <div className="book-card favorite-card" key={book.id}>

                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favorites;