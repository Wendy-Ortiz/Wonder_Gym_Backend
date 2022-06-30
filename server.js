const express = require("express");
const dotenv = require("dotenv");

const usersRoutes = require("./routes/users");

dotenv.config();

const server = express();
server.use(express.json());

const userOne = 'axel.matus@ucr.ac.cr'
const passwordOne = 'papa_frita123'

//Mount routes
server.use("/users", usersRoutes);

server.listen(process.env.PORT || 6000);
console.log(
    `Great! The server listening on http://localhost:${process.env.PORT || 6000}`
);