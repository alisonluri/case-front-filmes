import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Movie from "../pages/Movie/Movie";

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/movie/:id/:name'} element={<Movie />} />
            </Routes>
        </BrowserRouter>
    )
}