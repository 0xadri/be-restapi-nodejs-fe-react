const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', 
            [
              body('title')
                .trim() // trim its value
                .isLength({ min: 5 }) // validate it's minimum 7 characters
                .withMessage('title too short'), // add error msg
              body('content').trim().isLength({ min: 5 })
            ],
            feedController.createPost
          );

// GET /feed/post/:postId
router.get('/post/:postId', feedController.getPost);

module.exports = router;
