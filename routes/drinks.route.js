const { Router } = require('express')
const { drinksController } = require('../controllers/drinks.controller')
const router = Router()

router.get('/drinks', drinksController.getAllDrinks)
router.get('/drinks/in-stock', drinksController.getDrinksInStock)
router.get('/drinks/:id', drinksController.getDrinksById)
router.post('/drinks', drinksController.addDrinks)
router.delete('/drinks/:id', drinksController.deletedDrinks)
router.patch('/drinks/:id', drinksController.updateDrinks)

module.exports = router