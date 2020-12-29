
exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
      table.increments().primary();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('products');
  };
  