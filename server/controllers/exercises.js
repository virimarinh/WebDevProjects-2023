const express = require('express');
const model = require('../data/exercises.json')
const router = express.Router();

router
    .get('/', (req, res) => {
        const list = model.getExercises();
        const data = { data: list, total: list.length, isSuccess: true};
        res.send(data)
    })

    .get('/:id', (req, res) => {
        const id = +req.params.id;
        const exercise = model.getExercisesById(id);
        const data = {
            data: exercise, isSuccess: true
        }
        res.send(data)
    })

    .post('/', (req, res) => {
        const exercise = req.body;

        console.log({ exercise });
        console.log( req.query);
        console.log( req.params);
        console.log( req.headers);

        model.addExercise(exercise);
        const data = {
            data: exercise, isSuccess: true
        };
        res.send(data)
    })

    // .patch('.:id', (req, res) => {
    //     const exercise = req.body;
    //     model.updateExercise(exercise);
    //     const data = {
    //         data: exercise, isSuccess: true
    //     };
    //     res.send(data)
    // })

    .delete('/:id', (req, res) => {
        const id = req.params.id;
        model.deleteExercise(id);
        const data = {
            data: exercise, isSuccess: true
        };
        res.send(data)
    })

    module.exports = router;