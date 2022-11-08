const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "What are you?",
    "postContent": "An idiot sandwich.",
    "userId": 1
  },
  {
    "postTitle": "Beat BobbyFlay",
    "postContent": "You'll have to get through Morimoto to get to me!",
    "userId": 2
  },
  {
    "postTitle": "The OG",
    "postContent": "The only ORIGINAL Iron Chef!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;