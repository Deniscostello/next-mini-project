import BookItem from './BookItem';
import classes from './BookList.module.css';

function BookList(props) {
  return (
    <ul className={classes.list}>
      {props.books.map((book) => (
        <BookItem
          key={book.bookId}
          bookId={book.bookId}
          poster={book.poster}
          title={book.title}
          author={book.author}
          releaseDate={book.releaseDate}
          reviewLink={book.reviewLink}
        />
      ))}
    </ul>
  );
}

export default BookList;
