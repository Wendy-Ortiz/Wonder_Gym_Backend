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
    idRol: 1
},
{
    id: 3,
    idRol: 1
},
{
    id: 3,
    idRol: 2
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
    id:1,
    userId: 2,
    userName: "Wendy Ortiz",
    exercises:{
        title: "Rutina Martes",
        options: [
            "Ejercicio 5",
            "Ejercicio 6",
            "Ejercicio 7",
            "Ejercicio 8",
        ]
    }
},
{
    id:2,
    userId: 2,
    userName: "Wendy Ortiz",
    exercises:{
        title: "Rutina Miercoles",
        options: [
            "Ejercicio 1",
            "Ejercicio 3",
            "Ejercicio 5",
            "Ejercicio 7"
        ]
    }
},
{
    id:3,
    userId: 2,
    userName: "Wendy Ortiz",
    exercises:{
        title: "Rutina Jueves",
        options: [
            "Ejercicio 2",
            "Ejercicio 4",
            "Ejercicio 6",
            "Ejercicio 8"
        ]
    }
},
{
    id:4,
    userId: 2,
    userName: "Wendy Ortiz",
    exercises:{
        title: "Rutina Viernes",
        options: [
            "Ejercicio 1",
            "Ejercicio 2",
            "Ejercicio 5",
            "Ejercicio 6"
        ]
    }
},
{
    id:5,
    userId: 2,
    userName: "Wendy Ortiz",
    exercises:{
        title: "Rutina Sábado",
        options: [
            "Ejercicio 1",
            "Ejercicio 2",
            "Ejercicio 3",
            "Ejercicio 4"
        ]
    }
},
{
    id:6,
    userId: 2,
    userName: "Wendy Ortiz",
    exercises:{
        title: "Rutina Domingo",
        options: [
            "Ejercicio 1",
            "Ejercicio 2",
            "Ejercicio 3",
            "Ejercicio 4"
        ]
    }
},
{
    id:7,
    userId: 1,
    userName: "Axel Matus",
    exercises:{
        title: "Rutina Poderosisima",
        options: [
            "Ejercicio 1",
            "Ejercicio 2",
            "Ejercicio 3",
        ]
    }
},
{
    id:8,
    userId: 3,
    userName: "Daniel Calvo",
    exercises:{
        title: "Rutina Lunes",
        options: [
            "Ejercicio 1",
            "Ejercicio 2",
            "Ejercicio 3",
        ]
    }
},
{
    id:9,
    userId: 4,
    userName: "Alejandro Elvira Ramirez",
    exercises:{
        title: "Rutina Tren Inferior",
        options: [
            "Ejercicio 1",
            "Ejercicio 2",
            "Ejercicio 3",
        ]
    }
},
{
    id:10,
    userId: 5,
    userName: "Xinia Amador Porras",
    exercises:{
        title: "Rutina Tren Superior",
        options: [
            "Ejercicio 1",
            "Ejercicio 2",
            "Ejercicio 3",
            "Ejercicio 10",
            "Ejercicio 23",
            "Ejercicio 14",
        ]
    }
},
{
    id:11,
    userId: 6,
    userName: "Eva Maria Torres Rodriguez",
    exercises:{
        title: "Rutina Miercoles",
        options: [
            "Ejercicio 1",
            "Ejercicio 2",
            "Ejercicio 3",
            "Ejercicio 4",
        ]
    }
},
]