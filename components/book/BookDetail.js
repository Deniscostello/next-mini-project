import classes from './BookDetail.module.css'

function BookDetail(props) {
    console.log(props)
    return (
        <section className={classes.detail}>
            <img src={props.poster} alt={props.title} />
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <address>{props.releaseDate}</address>
            <p>{props.reviewLink}</p>
        </section>
    )
}

export default BookDetail