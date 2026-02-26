// importiamo le pages
import HomePage from "./pages/HomePage"
import BookPage from "./pages/BookPage"
import NotFoundPage from "./pages/NotFoundPage"

// import del provider del contesto globale
import { GlobalProvider } from "./contexts/GlobalContext"

// importiamo il layout
import DefaultLayout from "./layouts/DefaultLayout"

// importiamo comp libreria rotte
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

    return (
        <GlobalProvider >
            <BrowserRouter>
                <Routes>
                    <Route element={<DefaultLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/books/:id" element={<BookPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    )
}

export default App
