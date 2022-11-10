const express = require ('express');
const routes = express.Router();

const exercicios = [
    {
        id:0,
        name: "Cerrote",
    },
    {
        id:1,
        name: "Extensão Tríceps",
    },
    {
        id:2,
        name: "Flexão",
    },
    {
        id:3,
        name: "Agachamento Livre",
    },
    {
        id:4,
        name: "Leg Press",
    },
    {
        id:5,
        name: "Cadeira Extensora",
    },
    {
        id:6,
        name: "Quadríceps e Coluna",
    },
    {
        id:7,
        name: "Posterior de Ombro",
    },
    {
        id:8,
        name: "Downward Dog",
    },
]

//status http - código de erro/sucesso
//200
//400 erro do cliente
//500

routes.get('/exercises', (req, res) => {
    const query = req.query;
    console.log(query);

    res.status(200).json(exercicios);

})

routes.post('/exercises', (req, res) => {
    const newExercise = req.body;

    exercicios.push(body);

    res.status(200).json({message: "Success"});
})

routes.put('/exercises/:userId', (req, res) => {
    const { exerciseId } = req.params;
    const newExercise = req.body;

    let selectedIndex;
    let selected = exercicios.find((user, index) => {
        selectedIndex = index;
        return user.id = exerciseId;
    })
    selected = {...selected, ...newFields};

    exercicios[selectedIndex] = selected;

    exercicios.push(body);

    res.status(200).json({message: "Success"});
})

routes.post('/home', (req, res) => {
    console.log(req);
    res.status(200).send("oi");
})

module.exports = routes;