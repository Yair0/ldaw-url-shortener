const knex = require("../database/connection");

exports.create = (short_url) => {
  return knex("urls").insert(short_url);
};

exports.find = (id) => {
  return knex.select("*").from("urls").where("id", id).first();
};

exports.findUrl = (shortened_url) => {
  return knex.select("*").from("urls").where("gen_url", shortened_url).first();
};

exports.increment = async (url_shortened) => {
  return await knex("urls")
    .increment("no_redirects")
    .where("gen_url", url_shortened);
};
