
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
      table.increments().primary();
      table.string('productId').notNullable();
      table.string('name').notNullable();
      table.float('price').notNullable();
      table.float('oldPrice').notNullable();
      table.string('status').notNullable();
      table.string('categories').notNullable();
      table.string('image');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('products');
  };
  