import express from 'express'
import validateUrl from './middleware/validateUrl'
import fetch from 'node-fetch'
import cors from 'cors'
const path = require('path');

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/index.html')))
}

app.post('/', validateUrl, async (req, res) => {
    try {
        const {urlInput} = req.body
        console.log(urlInput)
        const response = await fetch(`http://api.shrtco.de/v2/shorten?url=${urlInput}`)
        const shortendUrl = await response.json()
        res.send(shortendUrl)
    } catch (e) {
        res.status(500).send()
    }
})

app.get('/*', (req, res) => {
    res.sendFile('client/index.html', {root: __dirname});
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

