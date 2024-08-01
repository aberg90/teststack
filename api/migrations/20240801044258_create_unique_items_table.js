// migrations/YYYYMMDDHHMMSS_create_unique_items_table.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('unique_items', table => {
    table.increments('id').primary();
    table.integer('base_item_id').references('id').inTable('base_items').notNullable();
    table.integer('condition_id').references('id').inTable('conditions').notNullable();
    table.integer('user_id').references('id').inTable('users').notNullable();
    table.integer('unique_price').notNullable();
    table.boolean('isSold').notNullable().defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('unique_items');
};
