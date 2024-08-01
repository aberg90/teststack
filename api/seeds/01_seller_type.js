/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('sellers').del()
  await knex('sellers').insert([
    {name: 'seller1'},
    {name: 'seller2'},
    {name: 'seller3'}
  ]);
};