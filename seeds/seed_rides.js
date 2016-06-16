exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('rides').del(),

    // Inserts seed entries
    knex('rides').insert({id: 1, date: 'May 16, 2016', url: 'https://connect.garmin.com/modern/activity/1171715399'})
  );
};
