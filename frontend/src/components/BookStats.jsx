import React, { Component } from "react";

class BookStats extends Component {
  render() {
    return (
      <div className="stats">
        <h2>BookHub Statistics</h2>
        <p>Total Books: {this.props.totalBooks}</p>
        <p>Available Genres: {this.props.genres}</p>
      </div>
    );
  }
}

export default BookStats;