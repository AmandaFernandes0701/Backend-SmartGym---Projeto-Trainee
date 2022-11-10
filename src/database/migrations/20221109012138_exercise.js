/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("exercise", function(table) {
      table.string("id_exercicio").primary().notNullable();
      table.string("user_id").notNullable();
      table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade");
      table.string("titulo").notNullable();
      table.string("descricao").notNullable();
      table.string("imagem").notNullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('exercise');
  };
