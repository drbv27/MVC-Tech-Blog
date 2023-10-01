const { User } = require("../models");

const userData = [
  {
    username: "Walter",
    email: "walterwhite@gmail.com",
    password: "password12345"
  },
  {
    username: "Jesse",
    email: "jessepinkman@hotmail.com",
    password: "password12345"
  },
  {
    username: "Mike",
    email: "mikeehrmantraut@aol.com",
    password: "mikeehrmantraut@aol.com"
  },
  {
    username: "Gus",
    email: "gustavofring@gmail.com",
    password: "password12345"
  },
  {
    username: "Hank",
    email: "hankschrader@aol.com",
    password: "password12345"
  }
];

const seedUsers = () => User.bulkCreate(userData);

  module.exports = seedUsers;