
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 0.5,
          size: 'stick'
        },
        {
          recipe_id: 2,
          ingredient_id: 1,
          quantity: 0.5,
          size: 'stick'
        },
        {
          recipe_id: 3,
          ingredient_id: 1,
          quantity: 3,
          size: 'Tbsp'
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          quantity: .25,
          size: 'cup'
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          quantity: 1,
          size: 'can'
        },
        {
          recipe_id: 2,
          ingredient_id: 4,
          quantity: 3,
          size: 'breasts',
        },
        {
          recipe_id: 2,
          ingredient_id: 5,
          quantity: 2,
          size: 'tsp'
        },
        {
          recipe_id: 3,
          ingredient_id: 5,
          quantity: 1,
          size: 'tsp'
        },
        {
          recipe_id: 2,
          ingredient_id: 6,
          quantity: 4,
          size: 'tsp'
        },
        {
          recipe_id: 3,
          ingredient_id: 6,
          quantity: 2,
          size: 'tsp'
        },
        {
          recipe_id: 2,
          ingredient_id: 7,
          quantity: 0.25,
          size: 'tsp'
        },
        {
          recipe_id: 2,
          ingredient_id: 8,
          quantity: 5,
          size: 'tsp'
        },
        {
          recipe_id: 3,
          ingredient_id: 8,
          quantity: 3,
          size: 'tsp'
        },
        {
          recipe_id: 2,
          ingredient_id: 9,
          quantity: 1,
          size: 'package'
        },
        {
          recipe_id: 2,
          ingredient_id: 10,
          quantity: 1.5,
          size: 'cup'
        },
        {
          recipe_id: 2,
          ingredient_id: 11,
          quantity: 1,
          size: 'cup'
        },
        {
          recipe_id: 2,
          ingredient_id: 12,
          quantity: 0.5,
          size: 'cup'
        },
        {
          recipe_id: 2,
          ingredient_id: 13,
          quantity: 0.5,
          size: 'cup'
        },
        {
          recipe_id: 3,
          ingredient_id: 14,
          quantity: 2,
          size: 'packages, small shrimp'
        },
        {
          recipe_id: 3,
          ingredient_id: 15,
          quantity: 0.5,
          size: 'medium'
        },
        {
          recipe_id: 3,
          ingredient_id: 16,
          quantity: 1,
          size: 'medium'
        },
        {
          recipe_id: 3,
          ingredient_id: 17,
          quantity: 1,
          size: 'lb'
        },
        {
          recipe_id: 3,
          ingredient_id: 18,
          quantity: 1,
          size: 'tsp'
        },
        {
          recipe_id: 3,
          ingredient_id: 19,
          quantity: 0.5,
          size: 'cup'
        },
        {
          recipe_id: 3,
          ingredient_id: 20,
          quantity: 0.5,
          size: 'cup'
        }
      ]);
    });
};
