// migrations/YYYYMMDDHHMMSS_create_carts_table.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('carts_table', table => {
    table.increments('id').primary();
    table.integer('unique_item_id').references('id').inTable('unique_items').notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('carts_table');
};
