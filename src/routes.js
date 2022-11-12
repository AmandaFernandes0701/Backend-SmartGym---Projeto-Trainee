const express = require ("express");
const routes = express.Router();

const auth = require("./middlewares/authentication");

const UserController = require("./controllers/UserController");
const ExerciseController = require("./controllers/ExerciseController");
const RelationController = require("./controllers/RelationController");

const UserValidator = require("./validators/UserValidator");
const ExerciseValidator = require("./validators/ExerciseValidator");
const RelationValidators = require("./validators/RelationValidator");
const { getByUserId } = require("./models/relation");

const SessionController = require ("./controllers/SessionController");

//SESSION
routes.post("/login", SessionController.signIn);

// EXERCISES
routes.get("/exercise", ExerciseValidator.getAll, auth.authenticateToken, ExerciseController.getAll);
routes.get("/exercise/:id_exercicio", ExerciseValidator.getById, auth.authenticateToken, ExerciseController.getById);
routes.post("/exercise", ExerciseValidator.create, auth.authenticateToken, ExerciseController.create);
routes.put("/exercise/:id_exercicio", ExerciseValidator.update, auth.authenticateToken, ExerciseController.update);
routes.delete("/exercise/:id_exercicio", ExerciseValidator.delete, auth.authenticateToken, ExerciseController.delete);

// USERS
routes.get("/users", UserValidator.getAll, auth.authenticateToken, UserController.getAll);
routes.get("/users/:user_id:", UserValidator.getById, auth.authenticateToken, UserController.getById);
routes.post("/users", UserValidator.create, auth.authenticateToken, UserController.create);
routes.put("/users/:user_id:", UserValidator.update, auth.authenticateToken, UserController.update);
routes.delete("/users/:user_id:", UserValidator.delete, auth.authenticateToken, UserController.delete);

// RELATIONS
routes.get("/relation/:user_id", RelationValidator.getByUserId, RelationController.getByUserId);
routes.post("/relation", RelationValidator.create, RelationController.create);
routes.delete("/relation/:user_id/:id_exercicio", RelationValidator.delete, RelationController.delete);

module.exports = routes;

//auth.authenticateToken,