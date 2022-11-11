const express = require ("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const ExerciseController = require("./controllers/ExerciseController");

// EXERCISES
routes.get("/exercise/:id_exercicio:", ExerciseController.getById);
routes.post("/exercise", ExerciseController.create);
routes.post("/exerciseteste", ExerciseController.teste);
routes.put("/exercise/:id_exercicio:", ExerciseController.update);
routes.delete("/exercise/:id_exercicio:", ExerciseController.delete);

// USERS
routes.get("/users", UserController.getAll);
routes.get("/users/:user_id:", UserController.getById);
routes.post("/users", UserController.create);
routes.put("/users/:user_id:", UserController.update);
routes.delete("/users/:user_id:", UserController.delete);


// Usar inner join para fazer relations, dado um ID, achar usuarios (diferente do video!)
// Fazer linkagem dos exercicios
 
module.exports = routes;