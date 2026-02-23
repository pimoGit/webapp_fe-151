// importiamo le pages
import HomePage from "./pages/HomePage"
import BookPage from "./pages/BookPage"

// importiamo il layout
import DefaultLayout from "./layouts/DefaultLayout"

// importiamo comp libreria rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/books/:id" element={<BookPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
