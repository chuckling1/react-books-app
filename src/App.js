import React from "react";
import { Link, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./Search";
import BookList from "./BookList";

class BooksApp extends React.Component {
  state = {
    books: [],
    query: "",
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/Search"
          render={() => (
            <Search books={this.state.books} query={this.state.query} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books-container">
              <BookList books={this.state.books} />
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
