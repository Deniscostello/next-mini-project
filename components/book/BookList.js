import BookItem from './BookItem';
import classes from './BookList.module.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';
import Button from '@mui/material';


function BookList(props) {
  return (
    // <ul className={classes.list}>
    //   {props.books.map((book) => (
    //     // <BookItem
    //     //   key={book.bookId}
    //     //   bookId={book.bookId}
    //     //   poster={book.poster}
    //     //   title={book.title}
    //     //   author={book.author}
    //     //   releaseDate={book.releaseDate}
    //     //   reviewLink={book.reviewLink}
    //     // />
    //   ))}
    // </ul>
    <div className={classes.bookCarouselContainer}>
      <Carousel>
        {props.books.map((book) => (
          <Paper key={book.bookId}>
            <div className={classes.bookCardContainer}>
              <div className={classes.bookCard} style={{ "--img": `url(${book.backdrops})` }}>
                <div className={classes.bookDetail}>
                  <div className={classes.bookPoster}>
                    <img src={book.poster} alt="" />
                  </div>
                  <div className={classes.bookContent}>
                    <div>  <h4>{book.title}</h4></div>
                    <div>  <h4>{book.author}</h4></div>
                    <div>  <h4>{book.releaseDate}</h4></div>
                  </div>
                  <div className={classes.bookButtonsContainer}>



                  </div>
                </div>
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
    </div>
  );
}

export default BookList;
