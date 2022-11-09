const controller = require('../controller/match.controller')

const router = require('express').Router()

router.get('/', controller.getAll)
    .get('/:team', controller.getByTeam)
    .get('/date/:date', controller.getByDate)
    .post('/', controller.create)
    .put('/:id', controller.update)
    .delete('/:id', controller.remove)

module.exports = router