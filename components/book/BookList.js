import BookItem from './BookItem';
import classes from './BookList.module.css';

function BookList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <BookItem
          key={meetup.meetingId}
          id={meetup.meetingId}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default BookList;
