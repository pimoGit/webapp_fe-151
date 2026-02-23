// importa componente per il listato
import CardBook from "../components/CardBook"


const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2><i>The boolean nerd book community</i></h2>

            <div>
                <div className="row row-cols-3 mt-4">
                    <CardBook />

                    <CardBook />
                    <CardBook />
                    <CardBook />
                    <CardBook />
                    <CardBook />
                    <CardBook />
                </div>
            </div>
        </>
    )
}

export default HomePage