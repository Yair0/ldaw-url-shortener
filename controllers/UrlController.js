const { nanoid } = require("nanoid/non-secure");
const Url = require("../models/Url");
const dotenv = require("dotenv");

exports.post = (req, res) => {
  let shortened_url = {
    original_url: req.body.original_url,
    gen_url: nanoid(5),
  };
  Url.create(shortened_url).then((id) => {
    Url.find(id).then((data) => {
      res.send(data);
    });
  });
};

exports.get = (req, res) => {
  let url = req.params.url_shortened;
  let redirect = true;
  let lastChar = "";
  if (url.length == 6) {
    lastChar = url.charAt(url.length - 1);
    url = lastChar == "+" ? url.slice(0, -1) : null;
    redirect = false;
  }
  Url.findUrl(url).then((data) => {
    res.send({ data: data, redirect: redirect });
  });
};

exports.put = (req, res) => {
  let url_shortened = req.params.url_shortened;
  if (url_shortened.length == 5) Url.increment(url_shortened);
};
