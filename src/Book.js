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

  render() {
    const style = {
      backgroundImage: `url(${this.props.thumbnail})`,
      width: 128,
      height: 193
    };

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={style} />
            <BookShelfChanger />
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
      </li>
    );
  }
}
export default Book;
