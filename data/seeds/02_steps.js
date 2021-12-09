// eslint-disable-next-line
exports.seed = (knex, Promise) => {
  return knex('steps').insert([
    { recipe_id: 1, step_number: 1, step_instructions: 'preheat skillet' },
    { recipe_id: 1, step_number: 2, step_instructions: 'butter the skillet' },
    { recipe_id: 1, step_number: 3, step_instructions: 'crack egg into hot skillet' },
    { recipe_id: 1, step_number: 4, step_instructions: 'add salt' },
    { recipe_id: 1, step_number: 5, step_instructions: 'add pepper' },
    { recipe_id: 1, step_number: 6, step_instructions: 'break yoke and cook until done' },
    { recipe_id: 2, step_number: 1, step_instructions: 'toast bread in toaster for 30 seconds' },
    { recipe_id: 2, step_number: 2, step_instructions: 'add butter' },
    { recipe_id: 2, step_number: 3, step_instructions: 'add jelly' },
  ])
}
