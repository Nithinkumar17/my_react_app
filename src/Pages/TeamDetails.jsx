import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import "./TeamDetails.css";

function TeamDetails() {

    const { id } = useParams();

    const teamlist = useSelector(
        (state) => state.teams.teamlist
    );

    const team = teamlist.find(
        (team) => team.id === id
    );

    if (!team) {
        return (
            <div>
                <h1>Team Not Found</h1>

                <Link to="/">
                    Back to Teams
                </Link>
            </div>
        );
    }

    return (
        <div className="team-details">

            <h1>{team.teamName}</h1>

            <p>
                <strong>Team Name:</strong>{" "}
                {team.teamName}
            </p>

            <p>
                <strong>Owner:</strong>{" "}
                {team.owner}
            </p>

            <p>
                <strong>Championships Won:</strong>{" "}
                {team.championshipsWon}
            </p>

            <p>
                <strong>Established In:</strong>{" "}
                {team.establishedIn}
            </p>

            <p>
                <strong>Matches:</strong>{" "}
                {team.matches}
            </p>

            <Link to="/">
                ← Back to Teams
            </Link>

        </div>
    );
}

export default TeamDetails;