// import di axios
import axios from "axios"
// import di state e effect
import { useState, useEffect } from "react"

// import hook custom del contesto globale
import { useGlobal } from "../contexts/GlobalContext";

// importa componente per il listato
import CardBook from "../components/CardBook"

const endpoint = "http://localhost:3000/api/books";


const HomePage = () => {

    // attivo l'utilizzo del/dei valore/i messi a disposizione del contesto globale
    const { setIsLoading } = useGlobal();

    // funzione per dellay caricamento TEMP (solo come test)
    // const setLoadingFalse = () => { setIsLoading(false) }

    // impostiamo var di stato
    const [books, setBooks] = useState([]);

    // funzione che gestisce la chiamata alla rotta index di BE
    const fetchBooks = () => {

        // parte la chimata cambio var stato context di conseguenza
        setIsLoading(true);

        axios.get(endpoint)
            .then(res => { setBooks(res.data); })
            .catch(err => {
                console.log(err);
            })
            .finally(setIsLoading(false))
    }

    // funzione di rendering del listato dei libri
    const rederBooks = () => {
        return books.map(book => {
            return (
                <div className="col" key={book.id}>
                    <CardBook bookProp={book} />
                </div>
            )
        })
    }


    // richiamo funzione di fetch al montaggio della page
    useEffect(fetchBooks, []);

    return (
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2><i>The boolean nerd book community</i></h2>

            <div>
                <div className="row row-cols-3 mt-4">
                    {rederBooks()}
                </div>
            </div>
        </>
    )
}

export default HomePage