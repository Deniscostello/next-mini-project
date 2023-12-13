import classes from './BookDetail.module.css'
import AddReview from '../AddReview'
import { useRouter } from 'next/router';
import GlobalContext from '@/pages/store/globalContext';

function BookDetail(props) {
    const router = useRouter();
    const [favText, setFavText] = useState('Add to favourites')
    const globalCtx = useContext(GlobalContext)

    function addReviewHandler(enteredReviewData) {
        setFavText(favText === <div></div> ? <div>enteredReviewData</div> : <div></div>); 

    }
    return (
        <>
        <section className={classes.detail}>
            <div className={classes.bookDetails}>
                <div className={classes.imageDiv}>
                    <img src={props.poster} alt={props.title} />
                </div>
                <div className={classes.textDiv}>
                    <h1>{props.title}</h1>
                    <h2>{props.author}</h2>
                    <h2>{props.releaseDate}</h2>
                    <a href={props.reviewLink}>Review on Youtube!</a>
                </div>
            </div>
        </section>
        <AddReview onAddReview={addReviewHandler} />
        </>
    )
}

export default BookDetail