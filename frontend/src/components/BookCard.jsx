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
      <div className="book-card-top">
        <span className="book-emoji">📖</span>
        <span className="genre-tag">{genre}</span>
      </div>

      <h3>{title}</h3>

      <p className="book-author">
        <span>by</span> {author}
      </p>

      <button
        onClick={() => onToggleFavorite(id)}
        className={isFavorite ? "favorite-button active" : "favorite-button"}
      >
        {isFavorite ? "♥  Remove Favorite" : "♡  Add to Favorites"}
      </button>
    </div>
  );
}

export default BookCard;