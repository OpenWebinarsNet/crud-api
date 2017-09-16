const Post = require('../models/post')

module.exports = {
    async getPosts() {
        const Posts = await Post.find({}).order({ date: 'desc' })
        return Posts
    },
    async getPost(id) {
        const Post = await Post.findById(id)
        return Post
    },
    async createOrUpdatePost(post) {
        if(post.id) {
            const updatedPost = await Post.findByIdAndUpdate(post.id, post, { new: true })
            return updatedPost
        }

        const newPost = await Post.create(post)
        return newPost
    },
    async deletePost(id) {
        const deletedPost = await Post.findByIdAndRemove(id)
        return deletedPost
    }
}