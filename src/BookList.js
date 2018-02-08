import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf.js";

class BookList extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(Object),
    onUpdateShelf: PropTypes.func
  };

  updateShelf = (book, newShelf) => {
    this.props.onUpdateShelf(book, newShelf);
  };

  render() {
    const { books } = this.props;

    const shelves = [
      { shelf: "currentlyReading", display: "Currently Reading" },
      { shelf: "wantToRead", display: "Want to Read" },
      { shelf: "read", display: "Read" }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf => {
            const bks = books.filter(book => book.shelf === shelf.shelf);
            return (
              <BookShelf
                key={shelf.shelf}
                shelf={shelf}
                books={bks}
                updateShelf={this.updateShelf}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default BookList;
