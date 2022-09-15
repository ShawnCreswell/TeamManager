const express = require('express')

const TeamController = require("../controllers/team.controller");

module.exports = (app) => {
  app.get("/api/team", TeamController.getAllTeam);
  app.post("/api/team", TeamController.createTeam);
  app.get("/api/team/:id", TeamController.getTeam);
  app.put("/api/team/:id", TeamController.updateTeam);
  app.delete("/api/team/:id", TeamController.deleteTeam);
};

// module.exports = app => {
//   app.get("/api/team/", teamController.findAllTeam);
//   app.get("/api/jokes/:id", JokeController.findOneSingleJoke);
//   app.post("/api/jokes/new", JokeController.createNewJoke);
//   app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
//   app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
// };
