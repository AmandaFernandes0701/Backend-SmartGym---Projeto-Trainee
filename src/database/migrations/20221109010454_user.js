/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table) {
    table.string('user_id').primary().notNullable();
    table.string('nome').notNullable();
    table.int('idade').notNullable();
    table.string('cpf').notNullable();
    table.string('sexo').notNullable();
    table.string('endereco').notNullable();
    table.string('cidadeestado').notNullable();
    table.string('telefone').notNullable();
    table.string('email').notNullable();
    table.string('senha').notNullable();
    table.string('confirmacaosenha').notNullable();
    table.string('firebase_id').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
