const express = require ("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const ExerciseController = require("./controllers/ExerciseController");
const RelationController = require("./controllers/RelationController");

const UserValidator = require("./validators/UserValidator");
const ExerciseValidator = require("./validators/ExerciseValidator");
const RelationValidators = require("./validators/RelationValidator");
const { getByUserId } = require("./models/relation");

// EXERCISES
routes.get("/exercise", ExerciseValidator.getAll, ExerciseController.getAll);
routes.get("/exercise/:id_exercicio", ExerciseValidator.getById, ExerciseController.getById);
routes.post("/exercise", ExerciseValidator.create, ExerciseController.create);
//routes.post("/exerciseteste", ExerciseValidator.teste, ExerciseController.teste);
routes.put("/exercise/:id_exercicio", ExerciseValidator.update, ExerciseController.update);
routes.delete("/exercise/:id_exercicio", ExerciseValidator.delete, ExerciseController.delete);

// USERS
routes.get("/users", UserValidator.getAll, UserController.getAll);
routes.get("/users/:user_id:", UserValidator.getById, UserController.getById);
routes.post("/users", UserValidator.create, UserController.create);
routes.put("/users/:user_id:", UserValidator.update, UserController.update);
routes.delete("/users/:user_id:", UserValidator.delete, UserController.delete);

// RELATIONS
routes.get("/relation/:user_id", RelationValidator.getByUserId, RelationController.getByUserId);
routes.post("/relation", RelationValidator.create, RelationController.create);
routes.delete("/relation/:user_id/:id_exercicio", RelationValidator.delete, RelationController.delete);

module.exports = routes;