const express = require('express');
const {getPost, createPosts, getDetail, getUpdate, deletePost,searchPost} = require('../controllers/post.js');


const router = express.Router();

router.get('/getPosts',getPost)
router.post('/createPost', createPosts)
router.get('/getDetail/:id',getDetail)
router.patch('/getUpdate/:id', getUpdate)
router.delete('/deletePost/:id',deletePost)
router.get('/searchPost',searchPost)

module.exports = router
