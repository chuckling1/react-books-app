import React, { Component } from "react";
//import PropTypes from 'prop-types';

class BookShelfChanger extends Component {
  //static propTypes = {
  //shelves: PropTypes.array.isRequired
  //, onAddShelf: PropTypes.func.isRequired
  //, onRemoveShelf: PropTypes.func.isRequired
  //}

  updateShelf = newShelf => {
    this.props.updateShelf(newShelf);
  };

  render() {
    const shelves = [
      { id: "currentlyReading", text: "Currently Reading" },
      { id: "wantToRead", text: "Want to Read" },
      { id: "read", text: "Read" },
      { id: "none", text: "None" }
    ];

    const { book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select
          value={this.props.currentShelf}
          onChange={e => this.updateShelf(e.target.value)}
        >
          <option value="none" disabled>
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
