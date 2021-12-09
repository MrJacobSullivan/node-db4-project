// eslint-disable-next-line
exports.seed = (knex, promise) => {
  return knex('ingredients').insert([
    { ingredient_name: 'butter' },
    { ingredient_name: 'egg' },
    { ingredient_name: 'salt' },
    { ingredient_name: 'pepper' },
    { ingredient_name: 'bread' },
    { ingredient_name: 'jelly' },
  ])
}
