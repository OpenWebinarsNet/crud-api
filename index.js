const express = require('express')
const apiRoutes = require('./routes/api')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || '3000'
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/openwebinars'

mongoose.connect(mongoUri)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/posts/', apiRoutes.loadPosts)
app.get('/api/posts/:id', apiRoutes.loadPost)
app.post('/api/posts/', apiRoutes.newPost)
app.put('/api/posts/:id', apiRoutes.updatePost)
app.delete('/api/posts/:id', apiRoutes.deletePost)

app.listen(port, () => {
    console.log(`[Express App] The app is listening on port: ${port}`)
})

app.on('error', (err) => handleError)
app.on('uncaughtException', (err) => handleError)
app.on('unhandledRejection', (err) => handleError)

function handleError(err) {
    console.error(`[Error] ${err.message}`)
    console.error(err.stack)
}