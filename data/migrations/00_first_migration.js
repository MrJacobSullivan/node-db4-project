const up = async (knex) => {
  await knex.schema
    .createTable('recipes', (table) => {
      table.increments('recipe_id')
      table.string('recipe_name', 128).notNullable().unique()
    })
    .createTable('steps', (table) => {
      table.increments('step_id')
      table.integer('step_number').unsigned().notNullable()
      table.string('instructions', 512).notNullable()
    })
    .createTable('ingredients', (table) => {
      table.increments('ingredient_id')
      table.string('ingredient_name', 256).notNullable()
    })
    .createTable('step_ingredients', (table) => {
      table.increments('step_ingredients_id')
      table.integer('quantity').unsigned().notNullable()
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table
        .integer('step_id')
        .unsigned()
        .notNullable()
        .references('step_id')
        .inTable('steps')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('ingredient_id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })
}

const down = async (knex) => {
  await knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
}

module.exports = { up, down }
