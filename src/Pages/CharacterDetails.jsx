import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CharacterDetails.css";

function CharacterDetails() {

    const { id } = useParams();

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchCharacter() {

            try {

                setLoading(true);
                setError("");

                const response = await fetch(
                    `http://localhost:3000/api/rickyandmorty/${id}`
                );

                if (!response.ok) {
                    throw new Error(
                        "Character not found"
                    );
                }

                const data = await response.json();

                console.log("Character:", data);

                setCharacter(data);

            } catch (error) {

                console.error(error);

                setError(
                    "Unable to fetch character information."
                );

            } finally {

                setLoading(false);

            }

        }

        fetchCharacter();

    }, [id]);


    if (loading) {

        return (
            <div className="character-detail-page">
                <h1>Loading character...</h1>
            </div>
        );

    }


    if (error) {

        return (
            <div className="character-detail-page">

                <h1>
                    {error}
                </h1>

                <Link to="./src/Pages/rickyandmorty">
                    ← Back to Characters
                </Link>

            </div>
        );

    }


    return (

        <div className="character-detail-page">

            <Link
                to="/rickyandmorty"
                className="back-button"
            >
                ← Back to Characters
            </Link>


            <div className="character-detail-card">

                <img
                    src={character.image}
                    alt={character.name}
                />


                <div className="character-detail-info">

                    <h1>
                        {character.name}
                    </h1>

                    <p>
                        <strong>ID:</strong>{" "}
                        {character.id}
                    </p>

                    <p>
                        <strong>Status:</strong>{" "}
                        {character.status}
                    </p>

                    <p>
                        <strong>Species:</strong>{" "}
                        {character.species}
                    </p>

                    <p>
                        <strong>Type:</strong>{" "}
                        {character.type || "Unknown"}
                    </p>

                    <p>
                        <strong>Gender:</strong>{" "}
                        {character.gender}
                    </p>

                    <p>
                        <strong>Origin:</strong>{" "}
                        {character.origin?.name}
                    </p>

                    <p>
                        <strong>Location:</strong>{" "}
                        {character.location?.name}
                    </p>

                </div>

            </div>

        </div>

    );

}

export default CharacterDetails;
