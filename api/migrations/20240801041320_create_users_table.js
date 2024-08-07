/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.up = function (knex) {
  return knex.schema.createTable('users', table => {
  table.increments();
  table.string('name', 250).notNullable();
  })

  };

  /**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */
  exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users');
  };
