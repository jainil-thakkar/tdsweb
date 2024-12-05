const express = require('express');
const router = express.Router();

const blogPosts = [
    { id: 1, title: 'Behind the Scenes', content: 'A look at how we produce each episode.' },
    // Add more posts
];

router.get('/', (req, res) => {
    res.json(blogPosts);
});

module.exports = router;
