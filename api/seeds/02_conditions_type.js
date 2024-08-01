// seeds/03_conditions_type.js

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('conditions').del();
  await knex('conditions').insert([
    { name: 'Mint' },
    { name: 'Near Mint' },
    { name: 'Light Play' },
    { name: 'Damaged' },
  ]);
};
