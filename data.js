const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

// ALL USERS
const saltRounds = parseInt(process.env.SALTROUNDS);

let lastId = 3;
pw1 = bcrypt.hashSync('helao123', saltRounds);
pw2 = bcrypt.hashSync('soydelguarco',saltRounds);
pw3 = bcrypt.hashSync('patito', saltRounds);

 exports.all_Users = [{
    id: 1,
    name: "Axel Matus",
    email: "axelantonio@gmail.com",
    password: pw1
},
{
    id: 2,
    name: "Wendy Ortiz",
    email: "wendy.ortiz@ucr.ac.cr",
    password: pw2
},
{
    id: 3,
    name: "Daniel Calvo",
    email: "daniel.calvo@ucr.ac.cr",
    password: pw3
},
]

// ROLES
exports.roles = [{
    id: 1,
    idRol: 1
},
{
    id: 1,
    idRol: 2
},
{
    id: 2,
    idRol: 2
},
{
    id: 3,
    idRol: 1
},
]

exports.confirmationCode = [
]