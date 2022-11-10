const express = require ("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const ExerciseController = require("./controllers/ExerciseController");

// EXERCISES
// routes.get("/exercises/:id_exercicio:", ExerciseController.getByID);
routes.post("/exercises", ExerciseController.create);
routes.put("/exercises/:id_exercicio:", ExerciseController.update);
routes.delete("/exercises/:id_exercicio:", ExerciseController.delete);

// USERS
// routes.get("/users/:user_id:", UserController.getByID);
// routes.post("/users", UserController.create);
// routes.put("/users/:user_id:", UserController.update);
// routes.delete("/users/:user_id:", UserController.delete);

 
module.exports = routes;