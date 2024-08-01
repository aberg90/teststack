/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('carts_table', table => {
    table.increments().primary();
    table.integer('unique_items_id');
    table.foreign('unique_items_id').references('id').inTable('unique_items');
    table.integer('user_id');
    table.foreign('user_id').references('id').inTable('sellers');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('carts_table', table => {
    table.dropForeign('unique_items_id'),
    table.dropForeign('user_id');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('carts_table');
  });
};

