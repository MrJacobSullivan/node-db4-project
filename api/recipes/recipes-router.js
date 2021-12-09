const express = require('express')
const Recipes = require('./recipes-model')

// base - /api/recipes
const router = express.Router()

// [GET] /api/recipes
/*
[
  {
    "recipe_id": 1,
    "recipe_name": "Scrambled Eggs"
  },
  {
    "recipe_id": 2,
    "recipe_name": "Scrambled Eggs"
  },
]
*/
router.get('/', async (req, res, next) => {
  try {
    const recipes = await Recipes.getAllRecipes()
    res.json(recipes)
  } catch (err) {
    next(err)
  }
})

// [GET] /api/recipes/:recipe_id
/*
{
  "recipe_id": 1,
  "recipe_name": "Scrambled Eggs",
  "steps": {
    {
      "step_id": 1,
      "step_number": 1,
      "step_instructions": "preheat_skillet",
      "ingredients": []
    },
    {
      "step_id": 2,
      "step_number": 2,
      "step_instructions": "butter the skillet",
      "ingredients": [
        { "ingredient_id": 1, "ingredient_name": "butter", "quantity": 1 }
      ]
    },
  }
}
*/

module.exports = router
