const seedUsers = require('./user-seeds.js');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedComments();
  console.log('\n----- COMMENTS SEEDED -----\n');
  

  process.exit(0);
};

seedAll();
