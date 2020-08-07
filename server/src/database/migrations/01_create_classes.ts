import Knex from 'knex';

export async function up(knex: Knex) { /* Criação da tabela */
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id').notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE'); /* Relacionamento entre a tabela "users" e "classes", famosa chave estrangeira */
  });
}

export async function down(knex: Knex) { /* Deleta a tabela */
  return knex.schema.dropTable('classes');
}