
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          id: 1,
          recipe_id: 1,
          step_number: 1,
          step: 'Put butter and brown sugar in medium pot on medium.'
        },
        {
          id: 2,
          recipe_id: 1,
          step_number: 2,
          step: 'Stir until melted, and slightly reduced.'
        },
        {
          id: 3,
          recipe_id: 1,
          step_number: 3,
          step: 'Add carrots, and coat.'
        },
        {
          id: 4,
          recipe_id: 1,
          step_number: 4,
          step: 'Stir and cook unitl sauce is thick and syrupy.'
        },
        {
          id: 5,
          recipe_id: 1,
          step_number: 5,
          step: 'Remove from heat, and Enjoy!'
        },
        {
          id: 6,
          recipe_id: 2,
          step_number: 1,
          step: 'Coat chicken with spices (salt, pepper, smoked paprika, garlic powder, plus others to taste). Place on a greased pan in a preheated oven (375 deg) for 25 min.'
        },
        {
          id: 7,
          recipe_id: 2,
          step_number: 2,
          step: 'Place tortelini in a pot with salted boiling water and a little olive oil(optional). Stir occasionally.'
        },
        {
          id: 8,
          recipe_id: 2,
          step_number: 3,
          step: 'Place butter, cream, milk, salt, pepper, garlic powder, and parmsean cheese in another pot. Bring gently to a simmer on Medium Low.'
        },
        {
          id: 9,
          recipe_id: 2,
          step_number: 4,
          step: 'Stir sauce frequently to prevent curdling. Add in shredded cheese a litle at a time, until desired consistency.'
        },
        {
          id: 10,
          recipe_id: 2,
          step_number: 5,
          step: 'Drain Tortelini. Toss in pan with a little bit of butter. Set to the side.'
        },
        {
          id: 11,
          recipe_id: 2,
          step_number: 6,
          step: 'Remove chicken from oven and cut into cubes.'
        },
        {
          id: 12,
          recipe_id: 2,
          step_number: 7,
          step: 'Toss chicken and sauce with the tortellini until well incorporated. Enjoy!'
        },
        {
          id: 13,
          recipe_id: 3,
          step_number: 1,
          step: 'Rinse shrimp, and chop veggies.'
        },
        {
          id: 14,
          recipe_id: 3,
          step_number: 2,
          step: 'Heat butter until melted in a pan, add shrimp and desired seasonings (garlic powder, pepper, salt, rosemary). Cook until pink.'
        },
        {
          id: 15,
          recipe_id: 3,
          step_number: 3,
          step: 'Remove cooked shrimp from pan. Add more butter. Melt, and add veggies and same seasonings. Cook until tender.'
        },
        {
          id: 16,
          recipe_id: 3,
          step_number: 4,
          step: 'Add shrimp back in with veggies. Toss to incoporate. Add a little cheese at a time and stir completely. Remove from heat and ENJOY!'
        }
      ]);
    });
};
