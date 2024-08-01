// migrations/20240801030433_update_carts_table.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.alterTable('carts_table', table => {
    table.dropForeign('user_id'); // Drop the foreign key constraint if it exists
    table.integer('user_id').unsigned().references('id').inTable('users').alter(); // Add the foreign key constraint again
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.alterTable('carts_table', table => {
    table.dropForeign('user_id');
  });
};
