import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    knex.schema.createTable('todos', function (table) {
        table.increments('id');
        table.string('name');
        table.text('description');
        table.string('status', 15);
        table.string('classification', 15);
        table.timestamps();
    })
}

export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable('todos');
}

