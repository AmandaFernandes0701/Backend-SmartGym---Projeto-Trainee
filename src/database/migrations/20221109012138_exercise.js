/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable("exercise", function(table) {
      table.string("id_exercicio").primary().notNullable();
      table.string("titulo").notNullable();
      table.string("descricao").nullable();
      table.string("imagem").nullable();
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('exercise');
  };
