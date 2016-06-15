exports.up = function(knex, Promise) {
  return knex.schema.createTable('rides', function(table){
    table.increments();
    table.string('date');
    table.string('url');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rides');
};
