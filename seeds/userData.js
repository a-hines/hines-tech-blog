const { User } = require('../models');

const userdata =
[
  {
    "username": "GordonRamsey",
    "password": "password"
  },
  {
    "username": "BobbyFlay",
    "password": "password"
  },
  {
    "username": "Morimoto",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;