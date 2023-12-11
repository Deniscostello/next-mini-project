import classes from './BookDetail.module.css'
import AddReview from '../AddReview'

function BookDetail(props) {

    function addReviewHandler(enteredReviewData) {
        console.log(enteredReviewData)

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