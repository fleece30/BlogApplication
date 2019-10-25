const Blog = require('../models/blog');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/database');


module.exports=function(router){
    router.post('/newBlog',(req,res) => {
        if(!req.body.title){
            res.json({success: false, message: 'Blog title is required.'});
        }
        else{
            if(!req.body.body){
                res.json({success: false, message: 'Blog body is required.'});
            }
            else{
                const blog = new Blog({
                    title: req.body.title,
                    body: req.body.body,
                    createdBy: req.body.createdBy
                });
                blog.save((err) => {
                    if(err){
                        res.json({success: false, message: err});
                    }
                    else{
                        res.json({success: true, message: 'Blog Saved'});
                    }
                })
            }
        }
    });

    router.get('/allBlogs',(req,res) => {
        Blog.find({}, (err,blogs) => {
             if(err){
                 res.json({success: false, message: err});
             }
             else{
                 if(!blogs){
                    res.json({success: false, message: "No blogs"});
                 }
                 else{
                     res.json({success: true, blogs: blogs});
                 }
             }
        }).sort({'_id':-1});
    });

    router.get('/singleBlog/:id',(req,res) => {
        Blog.findOne({ _id: req.params.id}, (err,blogs) =>{
            if(err){
                res.json({success: false, message: err});
            }
            else{
                if(!blogs){
                   res.json({success: false, message: "No blogs"});
                }
                else{
                    res.json({success: true, blogs: blogs});
                }
            }
        });
    });

    router.put('/updateBlog', (req, res) => {
        Blog.findOne({ _id: req.body._id }, (err,blogs) => {
            if(err){
                res.json({success: false, message: err});
            }
            else{
                if(!blogs){
                   res.json({success: false, message: "No blogs"});
                }
                else{
                    blogs.title = req.body.title;
                    blogs.body = req.body.body;
                    blogs.save((err) => {
                        if(err){
                            res.json({success: false, message: err});
                        }
                        else{
                            res.json({success: true, message: 'Blog Updated'});
                        }
                    });
                }
            }
        });
    });

    router.delete('/deleteBlog/:id', (req,res) => {
        Blog.findOne({_id: req.params.id}, (err,blogs) => {
            if(err){
                res.json({success: false, message: err});
            }
            else{
                if(!blogs){
                   res.json({success: false, message: "No blogs"});
                }
                else{
                    blogs.remove((err) => {
                        if(err){
                            res.json({success: false, message: err});
                        }
                        else{
                            res.json({success: true, message: 'Blog Removed'});
                        }
                    });
                }
            }
        });
    });

    router.put('/likeBlog/:id', (req,res) => {
        Blog.findOne({_id: req.params.id}, (err,blog) => {
            if(err){
                console.log(err);
                res.json({success: false, message: err});
            }
            else{
                if(!blog){
                    console.log('no');
                    res.json({success: false, message: "No blogs"});
                }
                else{
                    username=req.body.username;

                    if(blog.likedBy.includes(this.username)){

                    }
                    else{
                        if(blog.dislikedBy.includes(this.username)){
                            blog.dislikes--;
                            const index = blog.dislikedBy.indexOf(this.username);
                            blog.dislikedBy.splice(index, 1);
                            blog.likes++;
                            blog.likedBy.push(this.username);
                            blog.save((err) => {
                                if(err){
                                    res.json({success: false, message: err});
                                }
                                else{
                                    res.json({success: true, message: 'Blog liked'});
                                }
                            });
                        }
                        else{
                            blog.likes++;
                            blog.likedBy.push(this.username);
                            blog.save((err) => {
                                if(err){
                                    res.json({success: false, message: err});
                                }
                                else{
                                    res.json({success: true, message: 'Blog liked'});
                                }
                            });
                        }
                    }
                }
            }
        });
    });

    router.put('/dislikeBlog/:id', (req,res) => {
        Blog.findOne({_id: req.params.id}, (err,blog) => {
            if(err){
                console.log(err);
                res.json({success: false, message: err});
            }
            else{
                if(!blog){
                    console.log('no');
                   res.json({success: false, message: "No blogs"});
                }
                else{
                    username=req.body.username;
                    if(blog.dislikedBy.includes(this.username)){

                    }
                    else{
                        if(blog.likedBy.includes(this.username)){
                            blog.likes--;
                            const index = blog.likedBy.indexOf(this.username);
                            blog.likedBy.splice(index, 1);
                            blog.dislikes++;
                            blog.dislikedBy.push(this.username);
                            blog.save((err) => {
                                if(err){
                                    res.json({success: false, message: err});
                                }
                                else{
                                    res.json({success: true, message: 'Blog liked'});
                                }
                            });
                        }
                        else{
                            blog.dislikes++;
                            blog.dislikedBy.push(this.username);
                            blog.save((err) => {
                                if(err){
                                    res.json({success: false, message: err});
                                }
                                else{
                                    res.json({success: true, message: 'Blog liked'});
                                }
                            });
                        }
                    }
                }
            }
        });
    });

    router.post('/comment', (req,res) => {
        Blog.findOne({_id: req.body.id}, (err,blogs) => {
            if(err){
                res.json({success: false, message: err});
            }
            else{
                if(!blogs){
                   res.json({success: false, message: "No blogs"});
                }
                else{
                    blogs.comments.push({
                        comment: req.body.comment,
                        commentedBy: this.username
                    });
                    blogs.save((err) => {
                        if(err){
                            res.json({success: false, message: err});
                        }
                        else{
                            res.json({success: true, message: 'Comment saved'});
                        }
                    });
                }
            }
        });
    });

    return router;
};