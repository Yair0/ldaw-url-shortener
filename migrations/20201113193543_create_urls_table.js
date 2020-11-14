exports.up = function (knex) {
  return knex.schema.createTable("urls", (table) => {
    table.increments("id");
    table.string("original_url", 512).notNullable();
    table.string("gen_url", 512).notNullable();
    table.integer("no_redirects").defaultTo(0);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("urls");
};
