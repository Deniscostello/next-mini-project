import classes from './BookDetail.module.css'

function BookDetail(props) {
    console.log(props.releaseDate)
    return (
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
    )
}

export default BookDetail