const express = require("express")
const router = express.Router()
const canvacard = require("canvacard")

router.get("/", async (req, res) => {

try {

const author = req.query.author || "Unknown Artist"
const album = req.query.album || "Unknown Album"
const title = req.query.title || "Unknown Title"
const image = req.query.image || "https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60"

// duración total en ms
const duration = Number(req.query.duration) || 180000

// tiempo actual
const progress = Number(req.query.progress) || 30000

const start = Date.now() - progress
const end = start + duration

const spotify = new canvacard.Spotify()

.setAuthor(author)
.setAlbum(album)
.setTitle(title)
.setImage(image)
.setStartTimestamp(start)
.setEndTimestamp(end)

const data = await spotify.build()

res.setHeader("Content-Type", "image/png")
res.end(data)

} catch (err) {

res.status(500).json({
error: err.message
})

}

})

module.exports = router