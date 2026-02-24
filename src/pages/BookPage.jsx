// import axios
import axios from "axios";
// import state e effect
import { useState, useEffect } from "react";

import { Link, useParams, useNavigate } from "react-router-dom"

// import componente per il listato delle reviews
import CardReview from "../components/CardReview"

const endpoint = "http://localhost:3000/api/books/";


const BookPage = () => {

    // prendiamo id libro da url rotta
    const { id } = useParams();

    // creiamo istanza del navigate per poterlo utilizzare
    const redirect = useNavigate();

    // settiamo la var di stato per il libro
    const [book, setBook] = useState({});

    // funzione che gestisce la chiamata alla rotta show di BE
    const fetchBook = () => {
        axios.get(endpoint + id)
            .then(res => { setBook(res.data); })
            .catch(err => {
                console.log(err);
                if (err.status = 404) redirect('/404');
            })
    }

    // richiamo funzione di fetch al montaggio della page
    useEffect(fetchBook, []);

    // funzione di rendering del listato dei libri
    const rederReviews = () => {
        return book.reviews?.map(review => {
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