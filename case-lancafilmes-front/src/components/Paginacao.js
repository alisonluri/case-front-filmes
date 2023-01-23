import React, { useEffect, useContext } from "react";
import axios from "axios";
import { LANGUAGE, BASE_URL, API_KEY } from "../constants/urls";
import { GlobalStateContext } from '../global/GlobalStateContext'

function Pagination() {

    const { states, setters } = useContext(GlobalStateContext)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${BASE_URL}/popular?${API_KEY}&${LANGUAGE}&page=${states.currentPage}`);

                setters.setTotalPages(res.total_pages);
                const array = Array(states.totalPages).fill().map((e, i) => i + 1);
                setters.setPageNumbers(array);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [states.currentPage]);

    const pages = states.pageNumbers.slice(states.currentPage - 1, states.currentPage + states.pagesToShow - 1);

    return (
        <nav>
            <ul className='pagination'>
                {states.currentPage === 1 ? null : (
                    <li className='page-item'>
                        <button className="page-link" onClick={() => setters.setCurrentPage(states.currentPage - 1)}>Previous</button>
                    </li>
                )}
                {pages.map(number => (
                    <li key={number} className={`page-item ${states.currentPage === number ? 'active' : ''}`}>
                        <button onClick={() => setters.setCurrentPage(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
                {states.currentPage === states.totalPages ? null : (
                    <li className='page-item'>
                        <button className="page-link" onClick={() => setters.setCurrentPage(states.currentPage + 1)}>Next</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Pagination;