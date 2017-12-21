import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class BookShelf extends Component {
  
//  static propTypes = {
  //  	shelves: 
    //}
  
  
  state = {
  	query: ""
  }

		

  render() {
    
    const books = [
            {
              id: "toKillAMockingBird",
              title: "To Kill a Mocking Bird",
              author: "Harper Lee",
              width: 128,
              height: 193,
              imgUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
          	},
			{
              id: "toKillAMockingBird",
              title: "To Kill a Mocking Bird",
              author: "Harper Lee",
              width: 128,
              height: 193,
              imgUrl: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
          	}
          ]

    return (
      <div className="book-shelf">
        {books.map((book) => ( 
          <div className="book">
            <div className="book-top">
              <div className="book-cover" 
              style={{ width: book.width, height: book.height, backgroundImage: `url(`+book.imgUrl+`)` }}>
              </div>	

              <BookShelfChanger />
          	</div>
            <div className="book-title">To Kill a Mockingbird</div>
            <div className="book-authors">Harper Lee</div>
          </div>
      	))}
		</div>
	)
  }
}
export default BookShelf

/*
         'url("http://books.google.com/books/contentid=PGR2AwAAQBAJ&printsec=frontcover' +
                    	'&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_' +
                      	'Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
         */