import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RickyAndMorty.css";

function RickyAndMorty() {

    const [characters, setCharacters] = useState([]);

    const [page, setPage] = useState(1);

    const [totalCharacters, setTotalCharacters] =
        useState(0);

    const [totalPages, setTotalPages] =
        useState(0);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");


    // Fetch characters whenever page changes
    useEffect(() => {

        async function fetchCharacters() {

            try {

                setLoading(true);
                setError("");

                const response = await fetch(
                    `http://localhost:3000/api/rickyandmorty?page=${page}`
                );

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch characters"
                    );
                }

                const data = await response.json();

                console.log("API Response:", data);

                // Characters for current page
                setCharacters(data.results);

                // Total characters
                setTotalCharacters(data.info.count);

                // Total pages
                setTotalPages(data.info.pages);

            } catch (error) {

                console.error(error);

                setError(
                    "Unable to fetch Rick and Morty characters."
                );

            } finally {

                setLoading(false);

            }

        }

        fetchCharacters();

    }, [page]);


    // Go to previous page
    function previousPage() {

        if (page > 1) {

            setPage(page - 1);

            window.scrollTo(0, 0);

        }

    }


    // Go to next page
    function nextPage() {

        if (page < totalPages) {

            setPage(page + 1);

            window.scrollTo(0, 0);

        }

    }


    // Go directly to page
    function goToPage(pageNumber) {

        setPage(pageNumber);

        window.scrollTo(0, 0);

    }


    // Loading
    if (loading) {

        return (

            <div className="rick-page">

                <h1>
                    Rick and Morty Characters
                </h1>

                <p>
                    Loading characters...
                </p>

            </div>

        );

    }


    // Error
    if (error) {

        return (

            <div className="rick-page">

                <h1>
                    Rick and Morty Characters
                </h1>

                <p>
                    {error}
                </p>

            </div>

        );

    }


    return (

        <div className="rick-page">

            <h1>
                Rick and Morty Characters
            </h1>


            {/* ========================= */}
            {/* Character Summary */}
            {/* ========================= */}

            <div className="character-summary">

                <div>
                    <strong>
                        Total Characters
                    </strong>

                    <span>
                        {totalCharacters}
                    </span>
                </div>


                <div>
                    <strong>
                        Total Pages
                    </strong>

                    <span>
                        {totalPages}
                    </span>
                </div>


                <div>
                    <strong>
                        Current Page
                    </strong>

                    <span>
                        {page}
                    </span>
                </div>

            </div>


            {/* ========================= */}
            {/* Character Cards */}
            {/* ========================= */}

            <div className="character-container">

                {characters.map(
                    (character) => (
                    <Link
                        to={`/rickyandmorty/${character.id}`}
                        className="character-card"
                        key={character.id}
                    >

                            <img
                                src={character.image}
                                alt={character.name}
                            />


                            <div className="character-details">

                                <h2>
                                    {character.name}
                                </h2>


                                <p>
                                    <strong>
                                        Status:
                                    </strong>{" "}
                                    {character.status}
                                </p>


                                <p>
                                    <strong>
                                        Species:
                                    </strong>{" "}
                                    {character.species}
                                </p>


                                <p>
                                    <strong>
                                        Gender:
                                    </strong>{" "}
                                    {character.gender}
                                </p>


                                <p>
                                    <strong>
                                        Origin:
                                    </strong>{" "}
                                    {character.origin?.name}
                                </p>


                                <p>
                                    <strong>
                                        Location:
                                    </strong>{" "}
                                    {character.location?.name}
                                </p>

                            </div>

                        </Link>

                    )
                )}

            </div>


            {/* ========================= */}
            {/* Pagination */}
            {/* ========================= */}

            <div className="pagination">

                {/* Previous */}

                <button
                    onClick={previousPage}
                    disabled={page === 1}
                >
                    ← Previous
                </button>


                {/* First 5 pages */}

                {Array.from(
                    {
                        length: Math.min(totalPages, 5)
                    },
                    (_, index) => index + 1

                ).map(
                    (pageNumber) => (

                        <button
                            key={pageNumber}
                            className={
                                page === pageNumber
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                goToPage(pageNumber)
                            }
                        >
                            {pageNumber}
                        </button>

                    )
                )}


                {/* Dots */}

                {totalPages > 5 && (
                    <>
                        <span>
                            ...
                        </span>

                        <button
                            className={
                                page === totalPages
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                goToPage(totalPages)
                            }
                        >
                            {totalPages}
                        </button>
                    </>
                )}


                {/* Next */}

                <button
                    onClick={nextPage}
                    disabled={page === totalPages}
                >
                    Next →
                </button>

            </div>

        </div>

    );

}


export default RickyAndMorty;