const express = require ("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const ExerciseController = require("./controllers/ExerciseController");

// EXERCISES
routes.get("/exercise/:id_exercicio:", ExerciseController.getByID);
routes.post("/exercise", ExerciseController.create);
routes.put("/exercise/:id_exercicio:", ExerciseController.update);
routes.delete("/exercise/:id_exercicio:", ExerciseController.delete);

// USERS
routes.get("/users/:user_id:", UserController.getByID);
routes.post("/users", UserController.create);
routes.put("/users/:user_id:", UserController.update);
routes.delete("/users/:user_id:", UserController.delete);

 
module.exports = routes;