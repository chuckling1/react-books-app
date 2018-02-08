import React from "react";
import { Link, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./Search";
import BookList from "./BookList";

class BooksApp extends React.Component {
  state = {
    books: [],
    query: ""
  };

  refreshBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  componentDidMount() {
    this.refreshBooks();
  }

  onUpdateShelf = (book, newShelf) => {
    if (this.state.books) {
      BooksAPI.update(book, newShelf).then(() => {
        book.shelf = newShelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([book])
        }));
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/Search"
          render={() => (
            <Search
              books={this.state.books}
              query={this.state.query}
              onUpdateShelf={this.onUpdateShelf}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books-container">
              <BookList
                books={this.state.books}
                onUpdateShelf={this.onUpdateShelf}
              />
              <div className="open-search">
                <Link to="/Search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
