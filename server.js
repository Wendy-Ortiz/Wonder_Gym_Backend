const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const server = express();
server.use(express.json());

server.listen(process.env.PORT || 6000);
console.log(
    `Great! The server listening on http://localhost:${process.env.PORT || 6000}`
);

server.get('/', (req, res) => {
    res.send('Hello World!');
});