import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import {
    addTeam,
    deleteTeam,
    fetchTeams
} from "../redux/teamSlice";

import "./Home.css";


function Home() {

    // Get teamlist from Redux store
    const teamlist = useSelector(
        (state) => state.teams.teamlist
    );

    // Used to dispatch Redux actions
    const dispatch = useDispatch();

    // Get teams from API when Home page loads
    useEffect(() => {

    dispatch(fetchTeams());

}, [dispatch]);


    // Form states
    const [teamName, setTeamName] = useState("");
    const [owner, setOwner] = useState("");
    const [matches, setMatches] = useState("");
    const [championshipsWon, setChampionshipsWon] = useState("");
    const [establishedIn, setEstablishedIn] = useState("");


    // Add team
    function addNewTeam() {

        // Validation
        if (
            teamName === "" ||
            owner === "" ||
            matches === "" ||
            championshipsWon === "" ||
            establishedIn === ""
        ) {
            alert("Please enter all team details");
            return;
        }


        // Create new team object
        const newTeam = {

            teamName: teamName,

            owner: owner,

            matches: Number(matches),

            championshipsWon: Number(championshipsWon),

            establishedIn: Number(establishedIn)

        };


        // Send new team to Redux
        dispatch(addTeam(newTeam));


        // Clear input boxes
        setTeamName("");
        setOwner("");
        setMatches("");
        setChampionshipsWon("");
        setEstablishedIn("");
    }


    // Delete team
  async function removeTeam(id) {

    try {

        await dispatch(deleteTeam(id)).unwrap();

        alert("Team deleted successfully");

    } catch (error) {

        console.error(error);

        alert("Failed to delete team");

    }

}

    return (

        <div className="home-page">

            <h1>
                IPL Teams
            </h1>


            {/* Add Team Form */}

            <div className="team-form">

                <input
                    type="text"
                    placeholder="Team Name"
                    value={teamName}
                    onChange={(e) =>
                        setTeamName(e.target.value)
                    }
                />


                <input
                    type="text"
                    placeholder="Owner"
                    value={owner}
                    onChange={(e) =>
                        setOwner(e.target.value)
                    }
                />


                <input
                    type="number"
                    placeholder="Matches"
                    value={matches}
                    onChange={(e) =>
                        setMatches(e.target.value)
                    }
                />


                <input
                    type="number"
                    placeholder="Championships Won"
                    value={championshipsWon}
                    onChange={(e) =>
                        setChampionshipsWon(e.target.value)
                    }
                />


                <input
                    type="number"
                    placeholder="Established Year"
                    value={establishedIn}
                    onChange={(e) =>
                        setEstablishedIn(e.target.value)
                    }
                />


                <button onClick={addNewTeam}>
                    Add Team
                </button>

            </div>


            {/* Team Cards */}

            <div className="team-container">

                {teamlist.map((team, index) => (

                    <div
                        className="team-card"
                        key={team.id}
                    >
                        <h2>
                            <Link to={`/team/${team.id}`}>
                                {team.teamName}
                            </Link>
                        </h2>


                        <p>
                            <strong>
                                Championships Won:
                            </strong>{" "}
                            {team.championshipsWon}
                        </p>


                        <p>
                            <strong>
                                Owner:
                            </strong>{" "}
                            {team.owner}
                        </p>


                        <p>
                            <strong>
                                Established In:
                            </strong>{" "}
                            {team.establishedIn}
                        </p>


                        <p>
                            <strong>
                                Matches:
                            </strong>{" "}
                            {team.matches}
                        </p>


                        <button
                            onClick={() =>
                                removeTeam(team.id)
                            }
                        >
                            Delete
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );
}


export default Home;