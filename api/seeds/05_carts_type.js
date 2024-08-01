// seeds/07_carts_type.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('carts_table').del();
  await knex('carts_table').insert([
    { unique_item_id: 1, user_id: 1 },
    { unique_item_id: 2, user_id: 2 },
    { unique_item_id: 3, user_id: 3 }
  ]);
};
