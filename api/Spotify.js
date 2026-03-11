const express = require("express")
const router = express.Router()
const canvacard = require("canvacard")

router.get("/", async (req, res) => {

try {

const author = req.query.author ? decodeURIComponent(req.query.author) : "Unknown Artist"
const album = req.query.album ? decodeURIComponent(req.query.album) : "Unknown Album"
const title = req.query.title ? decodeURIComponent(req.query.title) : "Unknown Song"

const image = req.query.image || "https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60"

const start = req.query.start ? Number(req.query.start) : Date.now() - 10000
const end = req.query.end ? Number(req.query.end) : Date.now() + 60000

const spotify = new canvacard.Spotify()

.setAuthor(author)
.setAlbum(album)
.setTitle(title)
.setStartTimestamp(start)
.setEndTimestamp(end)
.setImage(image)

const data = await spotify.build("Cascadia Code PL, Noto Color Emoji")

res.setHeader("Content-Type", "image/png")
res.end(data)

} catch (err) {

res.status(500).json({
error: err.message
})

}

})

module.exports = router