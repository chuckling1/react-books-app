import React, { Component } from "react";
import PropTypes from "prop-types";

class BookShelfChanger extends Component {
  static propTypes = {
    currentShelf: PropTypes.string,
    updateShelf: PropTypes.func
  };

  updateShelf = newShelf => {
    this.props.updateShelf(newShelf);
  };

  render() {
    const { currentShelf } = this.props;

    const shelves = [
      { id: "currentlyReading", text: "Currently Reading" },
      { id: "wantToRead", text: "Want to Read" },
      { id: "read", text: "Read" },
      { id: "none", text: "None" }
    ];

    return (
      <div className="book-shelf-changer">
        <select
          value={currentShelf}
          onChange={e => this.updateShelf(e.target.value)}
        >
          <option value={this.currentShelf} disabled>
            Move to...
          </option>
          {shelves.map(shelf => (
            <option
              key={shelf.id}
              value={shelf.id}
              className="book-shelf-changer-option"
            >
              {shelf.text}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
