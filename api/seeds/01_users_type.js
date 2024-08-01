// seeds/01_users_type.js

exports.seed = async function(knex) {
  await knex('users').del();
  await knex('users').insert([
    { name: 'user1' },
    { name: 'user2' },
    { name: 'user3' }
  ]);
};