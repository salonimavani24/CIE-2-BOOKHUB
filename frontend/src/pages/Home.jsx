import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="section-label">WELCOME TO BOOKHUB</span>

          <h1>
            Add a book.
            <br />
            <span>Make your own world.</span>
          </h1>

          <p>
            Explore your collection, add interesting reads,
            and keep your favorites all in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/books" className="primary-button">
              Explore Books →
            </Link>

            <Link to="/add-book" className="secondary-button">
              + Add a Book
            </Link>
          </div>
        </div>

        <div className="hero-book">
          <div className="book-illustration">
            <h2>BOOK</h2>
            <p>HUB</p>
          </div>
        </div>
      </section>

      <section className="home-features">
        <div className="feature-card">
          <h3>Discover</h3>
          <p>Search through your collection with ease.</p>
        </div>

        <div className="feature-card">
          <h3>Organize</h3>
          <p>Filter books by genre and keep everything organized.</p>
        </div>

        <div className="feature-card">
          <h3>Favorite</h3>
          <p>Save the books you never want to lose.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;