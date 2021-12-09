const Recipes = require('./recipes-model')

const validateRecipeId = async (req, res, next) => {
  const { recipe_id } = req.params

  try {
    const recipe = await Recipes.getRecipeById(recipe_id)
    if (!recipe) {
      next({ status: 400, message: 'invalid recipe id' })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  validateRecipeId,
}
