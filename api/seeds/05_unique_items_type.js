/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('unique_items').del()
  await knex('unique_items').insert([
    {base_items_id: 1, inventory_id: 1, condition_id: 1, unique_price: 50},
    {base_items_id: 2, inventory_id: 2, condition_id: 2, unique_price: 250},
    {base_items_id: 3, inventory_id: 3, condition_id: 3, unique_price: 75}
  ]);
};