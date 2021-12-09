const db = require('../../data/db-config')

const getAllRecipes = async () => {
  return await db('recipes')
}

module.exports = {
  getAllRecipes,
}
