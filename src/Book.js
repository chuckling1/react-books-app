import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";

class Book extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string
  };

  state = {
    currentShelf: ""
  };

  updateShelf = newShelf => {
    this.props.updateShelf(this.props.book, newShelf);
    this.setState({ currentShelf: newShelf });
  };

  render() {
    const style = {
      backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
      width: 128,
      height: 193
    };

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={style} />
            <BookShelfChanger
              currentShelf={this.props.book.shelf}
              updateShelf={this.updateShelf}
            />
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">
            {(this.props.book.authors || ["Unknown"]).join(", ")}
          </div>
        </div>
      </li>
    );
  }
}
export default Book;
