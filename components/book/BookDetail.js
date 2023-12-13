import classes from './BookDetail.module.css'
import AddReview from '../AddReview'
import { useRouter } from 'next/router';
import GlobalContext from '@/pages/store/globalContext';
import { useState, useContext } from 'react';

function BookDetail(props) {
    const router = useRouter();
    const [favText, setFavText] = useState( <h2></h2> )
    const globalCtx = useContext(GlobalContext)

    function addReviewHandler(enteredReviewData) {
        console.log(enteredReviewData.reviewText)
        setFavText(favText === <h2></h2> ? <h2></h2> : <h2>{enteredReviewData.reviewText}</h2>); 

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
                    <AddReview onAddReview={addReviewHandler} />
                    {favText}
                </div>
            </div>
        </section>
       
        </>
    )
}

export default BookDetail