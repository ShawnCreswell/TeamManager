const { response } = require("express");
const { model } = require("mongoose");
const Team = require("../models/team.model");

module.exports.getAllTeam = (req, res) => {
  Team.find({})
    .then((allDaTeam) => res.json({ teams: allDaTeam }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getTeam = (request, response) => {
  Team.findOne({ _id: request.params.id })
    .then((team) => response.json(team))
    .catch((err) => response.json(err));
};

module.exports.createTeam = (req, res) => {
  const { name, position, status1, status2, status3 } = req.body;
  Team.create({
    name,
    position,
    status1,
    status2,
    status3,
  })
    .then((team) => res.json(team))
    .catch((err) => res.status(400).json(err));
};

module.exports.updateTeam = (request, response) => {
  Team.findByIdAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedTeam) => {
      console.log(updatedTeam)
      response.json(updatedTeam);
    })
    .catch((err) => response.status(400).json(err));
};

module.exports.deleteTeam = (request, response) => {
  Team.deleteOne({ _id: request.params.id }).then((deleteConfirmation) =>
    response.json(deleteConfirmation)
  );
};

// module.exports.findAllJokes = (req, res) => {
//   Joke.find()
//     .then(allDaJokes => res.json({ jokes: allDaJokes}))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.findOneSingleJoke = (req, res) => {
// 	Joke.findOne({ _id: req.params.id })
// 		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
// 		.catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.createNewJoke = (req, res) => {
//   Joke.create(req.body)
//     .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.updateExistingJoke = (req, res) => {
//   Joke.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updatedJoke => {
//       console.log(updatedJoke)
//       res.json({ joke: updatedJoke })
//     })
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

// module.exports.deleteAnExistingJoke = (req, res) => {
//   Joke.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };
