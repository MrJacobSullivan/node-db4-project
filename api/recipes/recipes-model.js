const db = require('../../data/db-config')

const getAllRecipes = async () => {
  return await db('recipes')
}

const getRecipeById = async (recipe_id) => {
  const [recipe] = await db('recipes as r').where('r.recipe_id', recipe_id)
  return recipe
}

const getIngredients = async (step_id) => {
  const ingredients = await db('step_ingredients as si')
    .join('ingredients as i', 'si.ingredient_id', 'i.ingredient_id')
    .where('si.step_id', step_id)

  return ingredients
}

const getFullRecipeById = async (recipe_id) => {
  const rows = await db('recipes as r')
    .join('steps as s', 'r.recipe_id', 's.recipe_id')
    .where('r.recipe_id', recipe_id)
    .orderBy('s.step_number', 'asc')

  const recipe = rows.reduce(async (accP, row) => {
    const acc = await accP

    const { recipe_id, recipe_name, step_id, step_number, step_instructions } = row

    const ingredients = await getIngredients(step_number)

    const steps = [
      ...acc.steps,
      {
        step_id,
        step_number,
        step_instructions,
        ingredients: ingredients.map(({ ingredient_id, ingredient_name, quantity }) => ({
          ingredient_id,
          ingredient_name,
          quantity,
        })),
      },
    ]

    return {
      recipe_id,
      recipe_name,
      steps,
    }
  }, Promise.resolve({ steps: [] }))

  return recipe
}

module.exports = {
  getAllRecipes,
  getRecipeById,
  getFullRecipeById,
}
