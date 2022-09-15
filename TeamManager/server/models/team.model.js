const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
			minlength: [2, "Name must be at least 2 characters long"]
		},
			position: {
				type: String,
				required: [true, "Position is required"],
				minlength: [1, "Position must be at least 1 characters long"]
			},
			
			status1: { type: String},
			status2: { type: String},
			status3: { type: String},
},
	{ timestamps: true }
);

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;