const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { sendRecoveryCodeEmail } = require("../services/mailService");
const data = require("../data.js");
const saltRounds = 10;

exports.listUsers = async (req, res) => {
    // #swagger.tags = ['Users']
    try {
        const users = data.all_Users;
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({
            message: "Ocurrió un error al recuperar los usuarios.",
            error,
        });
    }
};

exports.createUser = async (req, res) => {
    // #swagger.tags = ['Users']
    /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/CreateUser' }
  } */
    try {
        const userPayload = req.body;
        //Append to allUsers Array
        const newUserId = lastId + 1;
        lastId = newUserId;
        data.all_Users.push({
            id: newUserId,
            name: userPayload.name,
            email: userPayload.email,
            password: await bcrypt.hash(
                userPayload.password,
                process.env.SALTROUNDS
            ),
        });
        res.json(data.all_Users[lastId - 1]);
    } catch (error) {
        res.status(500).json({
            message:
                "Ocurrió un error al crear el usuario. Intente nuevamente. Si el error persiste, contacte al administrador del sistema.",
            error,
        });
    }
};

exports.loginUser = async (req, res) => {
    // #swagger.tags = ['Users']
    /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/LoginUser' }
  } */
    try {
        const userPayload = req.body;
        const user = data.all_Users.filter(
            (user) => user.email === userPayload.email
        );
        if (
            !user ||
            !(await bcrypt.compare(userPayload.password, user[0].password))
        ) {
            res.status(401).send("Invalid credentials");
            return;
        }
        let rolesIds = data.roles.filter(r => r.id === user[0].id);
        rolesIds = rolesIds.map((r) => r.idRol);
        const token = jwt.sign(
            { userId: user[0].id, userName: user[0].name, roles: rolesIds },
            process.env.JWT_KEY,
            { expiresIn: "40m" }
        );

        res.json({
            // Envia todos los datos del usuario loggeado y su token
            token,
        });
    } catch (error) {
        res.status(500).send("Server error: " + error);
    }
};

exports.recoverPassword = async (req, res) => {
    // #swagger.tags = ['Users']
    /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/RecoverPassword' }
  } */
    try {
        const userPayload = req.body;
        const user = data.all_Users.filter(
            (user) => user.email === userPayload.email
        );
        if (!user) {
            res.status(401).send("Datos no válidos");
            return;
        }
        const randomToken = 236402;
        const code_userid = data.confirmationCode.filter(
            (code_user) => code_user.idUsuario === user[0].id
        );

        if (code_userid && code_userid.length !== 0) {
            data.confirmationCode = data.confirmationCode.filter(
                (code_user) => code_user.idUsuario === user.id
            );
        }

        data.confirmationCode.push({
            idUsuario: user[0].id,
            code: randomToken,
        });
        await sendRecoveryCodeEmail(user[0].email, randomToken);

        res.status(204).send();
    } catch (error) {
        res.status(500).send("Server error: " + error);
    }
};

exports.resetPassword = async (req, res) => {
    // #swagger.tags = ['Users']
    /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Add a user',
          schema: { $ref: '#/definitions/ResetPassword' }
  } */
    try {
        const userPayload = req.body;
        const user = data.all_Users.filter(
            (user) => user.email === userPayload.email
        );
        const code_userid = data.confirmationCode.filter(
            (code_user) => code_user.idUsuario === user[0].id
        );

        if (!user[0] || code_userid[0].code !== userPayload.code) {
            res.status(401).send("Datos no válidos");
            return;
        }

        const user_index = data.all_Users.findIndex(
            (obj) => obj.id == user[0].id
        );
        data.all_Users[user_index].password = await bcrypt.hash(
            userPayload.password,
            saltRounds
        );
        data.confirmationCode = data.confirmationCode.filter(
            (code_user) => code_user.idUsuario === user.id
        );

        res.status(204).send();
    } catch (error) {
        res.status(500).send("Server error: " + error);
    }
};
