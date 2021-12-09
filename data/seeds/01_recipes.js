// eslint-disable-next-line
exports.seed = (knex, Promise) => {
  return knex('recipes').insert([{ recipe_name: 'Scrambled Eggs' }, { recipe_name: 'Toast' }])
}
