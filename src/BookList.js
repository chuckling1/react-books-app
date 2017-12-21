import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf.js';

class BookList extends Component {
	
    static propTypes = {
      books: PropTypes.arrayOf(Object)
      //width: PropTypes.number,
      //height: PropTypes.number,
      //imgUrl: PropTypes.string,
      //title: PropTypes.string,
      //author: PropTypes.string
    }
  
  	state = {
  		shelves: [],
      	books: []
 	 }

	componentDidMount() {
    	//this.setState({books: this.props.books})
      	//const shelves = [
        //  {"Currently Reading" : []},
        //  {"Want to Read" : []},
        //  {"Read" : []}
    	//]
		console.log(this.props.books)    
        //this.setState({shelves: shelves})
      //this.setState({shelves: sortedShelves})
    }
	
	componentWillMount() {
     	//let sortedShelves = []
    	//let shelfCategories = []
        console.log(this.props.books)                                       
    	//if(this.props.books){
    	//	this.props.books.map(book => {
  		//		if(sortedShelves[book.shelf]){
  		//			sortedShelves[book.shelf].push(book)
  		//		}else{
          //     	 	shelfCategories.push(book.shelf)
            //  		sortedShelves[book.shelf] = [book]
            //	}
  			//})
			//
			//this.setState( {shelves: sortedShelves})
			
	
      
  	}


	//addShelf = (books) => {
      //this.setState( {shelves: this.shelves.concat([ books ])})
    //}
   
	
  render() {
    
    return (
      <div className="list-book">
          {
       		console.log(this.props.books)
         	//<BookShelf books={books}/>
            
          }
      </div>
    )

    //return (
    //
    //	<div className="book">
    // 		<div className="book-top">
    // 			<div className="book-cover" style={style}></div>
    // 			<BookShelfChanger />
    // 		</div>
    // 		<div className="book-title">{this.props.title}</div>
    // 		<div className="book-authors">{this.props.author}</div>
    // 	</div>
	//)
  
  }
}
export default BookList