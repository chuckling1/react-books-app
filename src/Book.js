import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {
	
    static propTypes = {
      width: PropTypes.number,
      height: PropTypes.number,
      imgUrl: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string
    }
  
  	state = {
  		query: ""
 	 }

  render() {
    const style = {
    	position: 'relative',
    	backgroundImage : `url(${this.props.imgUrl})`,
      	backgroundRepeat : 'no-repeat',
      	backgroundPosition : 'center',
      	backgroundSize : 'cover'
    }

    return (
    	<div className="book">
     		<div className="book-top">
     			<div className="book-cover" style={style}></div>
     			<BookShelfChanger />
     		</div>
     		<div className="book-title">{this.props.title}</div>
     		<div className="book-authors">{this.props.author}</div>
     	</div>
	)
  }
}
export default Book