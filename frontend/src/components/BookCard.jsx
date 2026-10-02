function BookCard({
  id,
  title,
  author,
  genre,
  isFavorite,
  onToggleFavorite,
}) {
  return (
    <div className="book-card">
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>

      <button onClick={() => onToggleFavorite(id)}>
        {isFavorite ? "♥ Remove from Favorites" : "♡ Add to Favorites"}
      </button>
    </div>
  );
}

export default BookCard;