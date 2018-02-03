import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class BookShelf extends Component {
  //  static propTypes = {
  //  	shelves:
  //}

  state = {
    query: ""
  };

  updateShelf = (book, newShelf) => {
    this.props.updateShelf(book, newShelf);
  };

  render() {
    return (
      <div className="book-shelf">
        <h2 className="bookshelf-title">{this.props.shelf.display}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <Book key={book.id} book={book} updateShelf={this.updateShelf} />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;

/*
         'url("http://books.google.com/books/contentid=PGR2AwAAQBAJ&printsec=frontcover' +
                    	'&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_' +
                      	'Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
         */
