import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import "./App.css";

class Search extends React.Component {
  state = {
    books: [],
    query: ""
  };

  searchForBooks = query => {
    if (!query) {
      this.setState({ query: "", books: [] });
    } else {
      this.setState({ query: query.trim() });
      BooksAPI.search(query).then(books => {
        if (books.error) {
          books = [];
        }
        books.map(book =>
          this.props.books
            .filter(b => b.id === book.id)
            .map(b => (book.shelf = b.shelf))
        );
        this.setState({ books });
      });
    }
  };

  render() {
    const { books } = this.state;
    const { onUpdateShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.searchForBooks(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.id}
                book={book}
                currentShelf={book.shelf}
                updateShelf={onUpdateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
