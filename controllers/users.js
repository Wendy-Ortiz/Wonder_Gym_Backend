const bcrypt = require("bcrypt");
const saltRounds = 10;

let lastId = 3;
pw1 = bcrypt.hashSync('helao123', saltRounds);
pw2 = bcrypt.hashSync('soydelguarco', saltRounds);
pw3 = bcrypt.hashSync('patito', saltRounds);

let all_Users = [{
    id: 1,
    name: "Axel Matus",
    email: "axel.matus@ucr.ac.cr",
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

exports.listUsers = async (req, res) => {
    try {
        const users = all_Users;
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
        message: "Ocurrió un error al recuperar los usuarios.",
        error,
        });
    }
};
  
exports.createUser = async (req, res) => {
    try {
        const userPayload = req.body;
        //Append to allUsers Array
        const newUserId = lastId + 1;
        lastId = newUserId;
        all_Users.push({
            id: newUserId,
            name: userPayload.name,
            email: userPayload.email,
            password: await bcrypt.hash(userPayload.password, saltRounds)
        })
        console.log(all_Users);
        res.json(all_Users[lastId - 1]);
    } catch (error) {
        res.status(500).json({
        message:
            "Ocurrió un error al crear el usuario. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
        error,
        });
    }
};
  
exports.loginUser = async (req, res) => {
    try {
        const userPayload = req.body;
        const user = all_Users.filter(user => user.email === userPayload.email);
        if (
        !user ||
        !(await bcrypt.compare(userPayload.password, user[0].password))
        ) {
        res.status(401).send("Invalid credentials");
        return;
        }
        res.json(user[0]); // Envia todos los datos del usuario loggeado
    } catch (error) {
        res.status(500).send("Server error: " + error);
    }
};