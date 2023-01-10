import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Movie from "../pages/DetailsMovie/Movie";
import ErrorPage from "../pages/Error/ErrorPage";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/movie/:id'} element={<Movie />} />
                <Route path={'/page-error'} element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}