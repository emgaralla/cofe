const Drink = require("../models/Drink.model");

module.exports.drinksController = {
  addDrinks: async (req, res) => {
    try {
      const result = await Drink.create({
        name: req.body.name,
        price: req.body.price,
        inStockCount: req.body.inStockCount,
        caffeine: req.body.caffeine,
        volume: req.body.volume,
        description: req.body.description,
      });
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },
  getAllDrinks: async (req, res) => {
    try {
      const result = await Drink.find();
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },
  getDrinksInStock: async (req, res) => {
    try {
      const result = await Drink.find({ inStockCount: { $gte: 1 } });
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },
  getDrinksById: async (req, res) => {
    try {
      const result = await Drink.findById(req.params.id);
      res.json(result);
    } catch (err) {
      res.json(err.message);
    }
  },
  deletedDrinks: async (req, res) => {
    try {
        await Drink.findOneAndRemove(req.params.id)
        res.json('deleted')
    } catch (err) {
        res.json(err.message)
    }
  },
  updateDrinks: async (req, res) => {
    try {
        const result = await Drink.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            inStockCount: req.body.inStockCount,
            caffeine: req.body.caffeine,
            volume: req.body.volume,
            description: req.body.description,
        }, {new: true})
        res.json(result)
    } catch (err) {
        res.json(err.message)
    }
  }
};
