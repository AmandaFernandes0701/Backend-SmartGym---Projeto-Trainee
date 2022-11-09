/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("relation", function(table) {
      table.string("id_exercicio").notNullable();
      table.foreign("id_exercicio").references("id_exercicio").inTable("exercise").onDelete("cascade");

      table.integer("id_usuario").notNullable();
      table.foreign("id_usuario").references("id_usuario").inTable("user").onDelete("cascade");
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('relation');
  };