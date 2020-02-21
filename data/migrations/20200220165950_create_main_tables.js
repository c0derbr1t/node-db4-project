
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('name', 200).notNullable().unique();
      tbl.string('description', 300).notNullable();
  })
  .createTable('steps', tbl => {
      tbl.increments();
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('step_number').notNullable();
      tbl.string('step', 500).notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient', 255).notNullable().unique();
  })
  .createTable('recipe_ingredients', tbl => {
      tbl.primary(['recipe_id', 'ingredient_id'])
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.integer('quantity')
        .notNullable();
      tbl.string('size', 200)
        .notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes');
};
