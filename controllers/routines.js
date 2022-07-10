const data = require("../data.js");

exports.listRoutines = async (req, res) => {
    // #swagger.tags = ['Routines']
    /*  #swagger.parameters['obj'] = {
          in: 'body',
          description: 'Send routines list of a specific user',
          schema: { $ref: '#/definitions/ListRoutines' }
  } */
    const userPayload = req.body;
    try {
        const userRoutines = data.usersRoutines.filter((element)=> element.userId === userPayload.id );
        res.status(200).json(userRoutines);
    } catch (error) {
        res.status(500).json({
            message: "Ocurrió un error al recuperar los usuarios.",
            error,
        });
    }
};