// migrations/20240802010200_update_unique_items_table.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return knex.schema.alterTable('unique_items', table => {
    table.dropColumn('inventory_id');
    table.integer('user_id').references('id').inTable('users');
    table.boolean('isSold').notNullable().defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return knex.schema.alterTable('unique_items', table => {
    table.dropColumn('user_id');
    table.dropColumn('isSold');
    table.integer('inventory_id').references('id').inTable('inventories');
  });
};
