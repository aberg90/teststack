// api/migrations/20240730211503_create_inventories_table.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('inventories', table => {
    table.increments();
    table.integer('seller_id');
    table.foreign('seller_id').references('id').inTable('sellers');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('inventories', table => {
    table.dropForeign('seller_id');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('inventories');
  });
};