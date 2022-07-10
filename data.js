const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

// ALL USERS
const saltRounds = parseInt(process.env.SALTROUNDS);

pw1 = bcrypt.hashSync('helao123', saltRounds);
pw2 = bcrypt.hashSync('guarco123',saltRounds);
pw3 = bcrypt.hashSync('patito20', saltRounds);

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
{
    id: 4,
    name: "Alejandro Elvira Ramirez",
    email: "ale.elvira@ucr.ac.cr",
    password: pw3
},
{
    id: 5,
    name: "Xinia Amador Porras",
    email: "xinia.amador@ucr.ac.cr",
    password: pw3
},
{
    id: 6,
    name: "Eva Maria Torres Rodriguez",
    email: "eva.maria@ucr.ac.cr",
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
{
    id: 4,
    idRol: 2
},
{
    id: 5,
    idRol: 2
},
{
    id: 6,
    idRol: 2
},
]

exports.confirmationCode = [
]

exports.usersData = [{
    id: 1,
    weight: 54.00,
    height: 171.00,
    contraindications: "Sin contraindicaciones"

},
{
    id: 2,
    weight: 0.00,
    height: 0.00,
    contraindications: "Sin contraindicaciones"
},
{
    id: 3,
    weight: 0.00,
    height: 0.00,
    contraindications: "Sin contraindicaciones"
},
{
    id: 4,
    weight: 62.74,
    height: 170.00,
    contraindications: "No puede levantar mucho peso por hernia"
},
{
    id: 5,
    weight: 65.21,
    height: 176.14,
    contraindications: "Sin contraindicaciones"
},
{
    id: 6,
    weight: 56.89,
    height: 162.10,
    contraindications: "Presión alta"
},
]

exports.usersRoutines = [{
    id:2,
    routineName: "Rutina Lunes",
    exercises: ["Ejercicio 1","Ejercicio 2","Ejercicio 3","Ejercicio 4"]
},
{
    id:2,
    routineName: "Rutina Martes",
    exercises: ["Ejercicio 1","Ejercicio 2","Ejercicio 3","Ejercicio 4"]
},
{
    id:2,
    routineName: "Rutina Miercoles",
    exercises: ["Ejercicio 1","Ejercicio 2","Ejercicio 3","Ejercicio 4"]
},
{
    id:2,
    routineName: "Rutina Jueves",
    exercises: ["Ejercicio 1","Ejercicio 2","Ejercicio 3","Ejercicio 4"]
},
{
    id:2,
    routineName: "Rutina Viernes",
    exercises: ["Ejercicio 1","Ejercicio 2","Ejercicio 3","Ejercicio 4"]
},
]