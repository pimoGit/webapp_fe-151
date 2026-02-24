import { Link } from "react-router-dom"

// import componente per il listato delle reviews
import CardReview from "../components/CardReview"

// dati temporanei per test props
const book = {
    "id": 5,
    "title": "Moby Dick",
    "author": "Herman Melville",
    "abstract": "A tale of obsession and revenge on the high seas.",
    "image": "moby_dick.jpg",
    "created_at": "2024-11-26T09:58:09.000Z",
    "updated_at": "2024-12-20T10:30:54.000Z",
    "reviews": [
        {
            "id": 13,
            "book_id": 5,
            "name": "Mia",
            "vote": 5,
            "text": "A gripping and complex tale.",
            "created_at": "2024-11-26T09:58:09.000Z",
            "updated_at": "2024-11-26T09:58:09.000Z"
        },
        {
            "id": 14,
            "book_id": 5,
            "name": "Noah",
            "vote": 3,
            "text": "Too long and detailed for me, but interesting.",
            "created_at": "2024-11-26T09:58:09.000Z",
            "updated_at": "2024-11-26T09:58:09.000Z"
        },
        {
            "id": 15,
            "book_id": 5,
            "name": "Olivia",
            "vote": 4,
            "text": "An epic journey with strong symbolism.",
            "created_at": "2024-11-26T09:58:09.000Z",
            "updated_at": "2024-11-26T09:58:09.000Z"
        }
    ]
};

const BookPage = () => {

    // funzione di rendering del listato dei libri
    const rederReviews = () => {
        return book.reviews.map(review => {
            return (
                <CardReview reviewProp={review} key={review.id} />
            )
        })
    }

    return (
        <>
            <header id="book" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img src={book.image} alt={book.title} />
                </div>
                <h1>{book.title}</h1>
                <h3 className="text-muted"><i>By {book.author}</i></h3>
                <p>{book.abstract}</p>
            </header>
            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {rederReviews()}
            </section>
            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default BookPage