var assert = require("assert"),
  slug = require("./index.js");

var AAA = /^([A-Z][a-z]+){3}$/;

assert(slug().match(AAA));

assert(
  slug
    .array()
    .join("")
    .match(AAA)
);
