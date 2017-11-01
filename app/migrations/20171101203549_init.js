exports.up = function (knex, Promise) {
  return knex.schema.createTable('restaurants', function (table) {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('phone').notNullable();
    table.boolean('active').notNullable().defaultTo(1);
    table.string('createdBy');
    table.string('updatedBy');
    table.dateTime('createdOn').defaultTo(knex.fn.now());
    table.dateTime('updatedOn');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('restaurants');
};