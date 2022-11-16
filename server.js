const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080

app.use(cors())
app.use(express.json({ extended: true }))
app.use('/api/post', require('./routes/post.routes'))

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://ali:123@cluster0.pwaen10.mongodb.net/post?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    app.listen(PORT, () => {
      console.log('Listening on port:' + PORT)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
