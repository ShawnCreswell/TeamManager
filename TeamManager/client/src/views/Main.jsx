import React, { useEffect, useState } from "react";
import axios from "axios";
import TeamList from "../components/TeamList";

const Main = () => {
  const [team, setTeam] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/team")
      .then((res) => {
        setTeam(res.data.teams);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [team]);

  const removeFromDom = (teamId) => {
    setTeam(team.filter((team) => team._id !== teamId));
  };
  
  return (
    <div className="table">
      {loaded && (
        <TeamList team={team} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};

export default Main;
