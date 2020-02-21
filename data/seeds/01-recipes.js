
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          name: 'Candied Carrots',
          description: 'Delicious carrots in a butter-brown sugar sauce'
        },
        {
          id: 2,
          name: 'Chicken Alfredo Tortelini',
          description: 'Creamy alfredo sauce over seasoned chicken and pillowy tortelini'
        },
        {
          id: 3,
          name: 'Cheesy Shrimp',
          description: 'Little shrimps with veggies smothered in cheeses'
        }
      ]);
    });
};
