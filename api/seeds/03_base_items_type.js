// seeds/04_base_items_type.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('base_items').del();
  await knex('base_items').insert([
    { name: 'base_item1' },
    { name: 'base_item2' },
    { name: 'base_item3' }
  ]);
};
