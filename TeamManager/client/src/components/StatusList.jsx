import React, { useState, useEffect } from "react";
import axios from "axios";

const StatusList = ({ num }) => {

  const [team, setTeam] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/team")
      .then((response) => {
        console.log("useEffect -->", response.data.teams);
        setTeams(response.data.teams);
        setLoaded(true);
      })
      .catch((error) => console.error(error));
  }, [team]);
  const updateStatus = (teamId, status) => {
    setTeam(teams.filter((p) => p._id === teamId));
    axios
      .put("http://localhost:8000/api/team/" + teamId, {
        ...team,
        ["status" + num]: status,
      })
      .then((response) => {
        console.log("updateStatus -->", response.data.status3);
        setTeam(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="card m-3">
      <div className="card-body">
        <h4>Teams</h4>
        <table className="table table-bordered table-striped table-hover m-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loaded &&
              teams.map((team) => {
                return (
                  <tr key={team._id} className="align-baseline">
                    <td>{team.name}</td>
                    <td>
                      <button
                        className={
                          "btn " +
                          (team[`status${num}`] === "playing"
                            ? "btn-success"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(team._id, "playing")}
                      >
                        Playing
                      </button>
                      <button
                        className={
                          "btn " +
                          (team[`status${num}`] === "not playing"
                            ? "btn-danger"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(team._id, "not playing")}
                      >
                        Not Playing
                      </button>
                      <button
                        className={
                          "btn " +
                          (team[`status${num}`] === "undecided"
                            ? "btn-warning"
                            : "btn-secondary")
                        }
                        onClick={() => updateStatus(team._id, "undecided")}
                      >
                        Undecided
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatusList;
