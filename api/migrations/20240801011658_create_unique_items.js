/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('unique_items', table => {
    table.increments().primary();
    table.integer('base_items_id');
    table.foreign('base_items_id').references('id').inTable('base_items');
    table.integer('inventory_id');
    table.foreign('inventory_id').references('id').inTable('inventories');
    table.integer('condition_id');
    table.foreign('condition_id').references('id').inTable('conditions');
    table.integer('unique_price').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('unique_items', table => {
    table.dropForeign('base_items_id'),
    table.dropForeign('inventory_id'),
    table.dropForeign('condition_id');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('unique_items');
  });
};
