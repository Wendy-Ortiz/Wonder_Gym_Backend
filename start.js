const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Wonder-Gym - API",
    description: "Este es el API de la aplicación Web de Wonder Gym.",
  },
  host: "localhost:3001",
  schemes: ["http", "https"],
  definitions: {
    CreateUser: {
      name: "José Rodríguez Pérez",
      email: "jose@correo.com",
      password: "patito",
    },
    LoginUser: {
      email: "jose@correo.com",
      password: "patito",
    },
    RecoverPassword: {
      email: "jose@correo.com",
    },
    ResetPassword: {
      email: "jose@correo.com",
      password: "patito",
      code: 123456,
    },
    ListRoutines: {
      id: 1,
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server.js");
});
