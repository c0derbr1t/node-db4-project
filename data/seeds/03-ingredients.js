
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'butter'},
        {id: 2, ingredient: 'brown sugar'},
        {id: 3, ingredient: 'canned carrots'},
        {id: 4, ingredient: 'chicken breast'},
        {id: 5, ingredient: 'salt'},
        {id: 6, ingredient: 'pepper'},
        {id: 7, ingredient: 'smoked paprika'},
        {id: 8, ingredient: 'garlic powder'},
        {id: 9, ingredient: 'tortellini'},
        {id: 10, ingredient: 'cream'},
        {id: 11, ingredient: 'milk'},
        {id: 12, ingredient: 'parmesean cheese'},
        {id: 13, ingredient: 'mozzerella cheese'},
        {id: 14, ingredient: 'shrimp'},
        {id: 15, ingredient: 'onion'},
        {id: 16, ingredient: 'orange bell pepper'},
        {id: 17, ingredient: 'asparagus'},
        {id: 18, ingredient: 'dried rosemary'},
        {id: 19, ingredient: 'cheddar cheese'},
        {id: 20, ingredient: 'gouda'}
      ]);
    });
};
