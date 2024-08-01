// seeds/01_users_type.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    { name: 'user1' },
    { name: 'user2' },
    { name: 'user3' }
  ]);
};

