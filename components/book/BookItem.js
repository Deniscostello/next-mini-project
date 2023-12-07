import Card from '../Card';
import classes from './BookItem.module.css';
import { useRouter } from 'next/router';

function BookItem(props) {
  const router = useRouter();
  

  function showDetailsHandler() {
    console.log(props.bookId);
    router.push('/' + props.bookId);
  }

  return (
    <div>
 <div className={classes.image}>
          <img src={props.poster} alt={props.title} />
        </div>
        <div className={classes.content}>
        <h3>{props.title}</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Book</button>
        </div> 
        </div>

  );
}

export default BookItem;
