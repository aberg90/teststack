/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('inventories').del()
  await knex('inventories').insert([
    {seller_id: 1},
    {seller_id: 3},
    {seller_id: 2}
  ]);
};
