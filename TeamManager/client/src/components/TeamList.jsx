import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TeamList = (props) => {
  const { removeFromDom } = props;

  const deleteTeam = (teamId) => {
    axios
      .delete("http://localhost:8000/api/team/" + teamId)
      .then((res) => {
        removeFromDom(teamId);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-header text-center">
            <h1>All Players</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <table className="table table-striped table-hover table-bordered border-primary">
                      <thead className="bg-dark text-white">
                        <tr>
                          <th>Team Name</th>
                          <th>Preferred Position</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
          {props.team &&
            props.team.map((team, i) => {
              return (
                      <tbody>
                      <div key={i} className="d-flex"></div>
                        <tr>
                          <td><Link to={`/team/edit/${team._id}`}><p>{team.name}</p></Link></td>
                          <td>{team.position}</td>
                          <td>
                          <div className="d-flex">
                            <Link className="btn btn-warning me-2 text-center"  style={{width:"100px", height:"50px"}} to={`/team/edit/${team._id}`}><p>Edit</p></Link>
                            <button className="btn btn-danger"  style={{width:"100px", height:"50px"}} onClick={(e) => deleteTeam(team._id)}>Delete</button>
                          </div>
                          </td>
                        </tr>
                      </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
};

export default TeamList;
