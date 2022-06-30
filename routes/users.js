const express = require("express");
const router = express.Router();

const {
    listUsers,
    createUser,
    loginUser,
} = require("../controllers/users");

router
    .route("/")
    .get(listUsers)
    .post(createUser);

router.route("/login").post(loginUser);

module.exports = router;
// server.post('/users', (req, res) => {
//     const userPayload = req.body;
//     console.log(userPayload.username);
//     console.log(userPayload.password);
//     result = ''
//     if(userPayload.username === userOne && userPayload.password === passwordOne){
//         result = `Welcome ${userOne}`;
//     } else {
//         result = 'invalid dataa!';
//     }
//     res.json(result);
// });