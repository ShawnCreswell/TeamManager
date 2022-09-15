const express = require("express");
const app = express();
const cors = require('cors');
require("./server/config/mongoose.config");
app.use(cors())
// const { v4: uuidv4 } = require('uuid')

// Port fort in .env
const dontenv = require("dotenv");
dontenv.config();
const PORT = process.env.PORT || 8000;

// Custom Console log color
const colors = require('colors')
colors.enable();

// Middleware
app.use(express.json(), express.urlencoded({ extended: true }));

// app.use(errorController);

// Routes 
const AllMyTeamRoutes = require("./server/routes/team.routes");
AllMyTeamRoutes(app);



const server = app.listen(PORT, () =>
  console.log(colors.rainbow(`The server is all fired up on port: ${server.address().port}`))
);
