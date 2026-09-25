import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTeams } from "../redux/teamSlice";
import "./Multiple.css";

function Multiple() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [teams, setTeams] = useState([
        {
            teamName: "",
            owner: "",
            matches: "",
            championshipsWon: "",
            establishedIn: ""
        }
    ]);

    const [message, setMessage] = useState("");

    function addTeamForm() {

        setTeams([
            ...teams,
            {
                teamName: "",
                owner: "",
                matches: "",
                championshipsWon: "",
                establishedIn: ""
            }
        ]);
    }

    function removeTeamForm(index) {

        if (teams.length === 1) {
            return;
        }

        const updatedTeams = teams.filter(
            (_, i) => i !== index
        );

        setTeams(updatedTeams);
    }

    function handleChange(index, field, value) {

        const updatedTeams = [...teams];

        updatedTeams[index] = {
            ...updatedTeams[index],
            [field]: value
        };

        setTeams(updatedTeams);
    }

    async function saveAllTeams() {

        setMessage("");

        // Validation
        for (const team of teams) {

            if (
                team.teamName.trim() === "" ||
                team.owner.trim() === "" ||
                team.matches === "" ||
                team.championshipsWon === "" ||
                team.establishedIn === ""
            ) {

                setMessage(
                    "Please enter all details for every team."
                );

                return;
            }
        }

        // Convert numbers
        const teamData = teams.map((team) => ({

            teamName: team.teamName.trim(),

            owner: team.owner.trim(),

            matches: Number(team.matches),

            championshipsWon: Number(
                team.championshipsWon
            ),

            establishedIn: Number(
                team.establishedIn
            )

        }));

        console.log("Sending teams:", teamData);

        try {

            const response = await fetch(
                "http://localhost:3000/api/IPL/add_multiple",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(teamData)
                }
            );

            console.log(
                "Response status:",
                response.status
            );

            const data = await response.json();

            console.log(
                "API Response:",
                data
            );

            if (!response.ok) {

                setMessage(
                    data.message ||
                    "Failed to save teams"
                );

                return;
            }

            // IMPORTANT:
            // Get the latest teams from API
            await dispatch(fetchTeams()).unwrap();

            setMessage(
                `${teams.length} teams saved successfully!`
            );

            // Go to Home page
            setTimeout(() => {
                navigate("/");
            }, 500);

        } catch (error) {

            console.error(
                "Save error:",
                error
            );

            setMessage(
                "Unable to connect to the API."
            );
        }
    }

    return (

        <div className="multiple-page">

            <h1>Add Multiple IPL Teams</h1>

            {teams.map((team, index) => (

                <div
                    className="multiple-team-card"
                    key={index}
                >

                    <div className="card-header">

                        <h2>
                            Team {index + 1}
                        </h2>

                        {teams.length > 1 && (

                            <button
                                className="remove-button"
                                onClick={() =>
                                    removeTeamForm(index)
                                }
                            >
                                Remove
                            </button>

                        )}

                    </div>

                    <input
                        type="text"
                        placeholder="Team Name"
                        value={team.teamName}
                        onChange={(e) =>
                            handleChange(
                                index,
                                "teamName",
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="Owner"
                        value={team.owner}
                        onChange={(e) =>
                            handleChange(
                                index,
                                "owner",
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="number"
                        placeholder="Matches"
                        value={team.matches}
                        onChange={(e) =>
                            handleChange(
                                index,
                                "matches",
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="number"
                        placeholder="Championships Won"
                        value={team.championshipsWon}
                        onChange={(e) =>
                            handleChange(
                                index,
                                "championshipsWon",
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="number"
                        placeholder="Established Year"
                        value={team.establishedIn}
                        onChange={(e) =>
                            handleChange(
                                index,
                                "establishedIn",
                                e.target.value
                            )
                        }
                    />

                </div>

            ))}

            <div className="multiple-actions">

                <button
                    className="add-team-button"
                    onClick={addTeamForm}
                >
                    + Add Another Team
                </button>

                <button
                    className="save-all-button"
                    onClick={saveAllTeams}
                >
                    Save All Teams
                </button>

            </div>

            {message && (
                <p className="multiple-message">
                    {message}
                </p>
            )}

        </div>
    );
}

export default Multiple;