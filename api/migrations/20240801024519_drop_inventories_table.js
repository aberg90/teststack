/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.alterTable('unique_items', table => {
    table.dropForeign('inventory_id');
  });

  return knex.schema.dropTableIfExists('inventories');
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.createTable('inventories', table => {
    table.increments();
    table.integer('seller_id').references('id').inTable('users');
  });

  return knex.schema.alterTable('unique_items', table => {
    table.integer('inventory_id').references('id').inTable('inventories');
  });
};
