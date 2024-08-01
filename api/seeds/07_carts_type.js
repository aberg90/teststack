/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('carts_table').del()
  await knex('carts_table').insert([
    {unique_items_id: 1, user_id: 1},
    {unique_items_id: 2, user_id: 2},
    {unique_items_id: 3, user_id: 3}
  ]);
};
