const express = require("express")
const router = express.Router()
const canvacard = require("canvacard")

router.get("/", async (req, res) => {

try {

const author = req.query.author || "Unknown Artist"
const album = req.query.album || "Unknown Album"
const title = req.query.title || "Unknown Song"

const image = req.query.image || "https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60"

const start = Number(req.query.start) || Date.now() - 10000
const end = Number(req.query.end) || Date.now() + 60000

const font = req.query.font || "Cascadia Code PL, Noto Color Emoji"

const spotify = new canvacard.Spotify()
.setAuthor(author)
.setAlbum(album)
.setTitle(title)
.setStartTimestamp(start)
.setEndTimestamp(end)
.setImage(image)

const data = await spotify.build(font)

res.setHeader("Content-Type", "image/png")
res.send(data)

} catch (err) {

res.status(500).json({
error: err.message
})

}

})

module.exports = router