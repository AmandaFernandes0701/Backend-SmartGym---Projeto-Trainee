/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("relation", function(table) {
      table.string("id_exercicio").notNullable();
      table.foreign("id_exercicio").references("id_exercicio").inTable("exercise").onDelete("cascade");
      table.string("user_id").notNullable();
      table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('relation');
  };