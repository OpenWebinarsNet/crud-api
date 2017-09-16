const Db = require('../lib/post')

module.exports = {
    loadPosts: async (req, res) => {
        const Entries = await Db.getPosts()
        res.status(200)
        res.json(Entries)
    },
    loadPost: async (req, res) => {
        const Entry = await Db.getPost(req.params.id)
        res.status(200)
        res.json(Entry)
    },
    newPost: async (req, res) => {
        const newEntry = await Db.createOrUpdatePost(req.body)
        res.status(201)
        res.json(newEntry)
    },
    updatePost: async (req, res) => {
        const updatedEntry = await Db.createOrUpdatePost(req.body)
        res.status(201)
        res.json(updatedEntry)
    },
    deletePost: async (req, res) => {
        const deletedEntry = await Db.deletePost(req.params.id)
        res.status(204)
        res.json(deletedEntry)
    }
}