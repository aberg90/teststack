/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('transactions_table', table => {
    table.increments().primary();
    table.integer('unique_items_id');
    table.foreign('unique_items_id').references('id').inTable('unique_items');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('transactions_table', table => {
    table.dropForeign('unique_items_id');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('transactions_table');
  });
};

