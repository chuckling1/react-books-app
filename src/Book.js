import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object,
    updateShelf: PropTypes.func,
    currentShelf: PropTypes.string
  };

  state = {
    currentShelf: ""
  };

  // move this book to a new shelf
  updateShelf = newShelf => {
    this.props.updateShelf(this.props.book, newShelf);
    this.setState({ currentShelf: newShelf });
  };

  render() {
    const { title, authors, imageLinks } = this.props.book;
    const { currentShelf, isSearch } = this.props;

    const style = {
      backgroundImage: `url(${imageLinks ? imageLinks.thumbnail : ""})`
    };

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={style} />
            <BookShelfChanger
              currentShelf={isSearch ? "none" : currentShelf}
              updateShelf={this.updateShelf}
            />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {(authors || ["Unknown"]).join(", ")}
          </div>
        </div>
      </li>
    );
  }
}
export default Book;
