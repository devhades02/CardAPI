const express = require("express")
const router = express.Router()
const canvacard = require("canvacard")
const { registerFont } = require("canvas")
const path = require("path")

// registrar fuente
registerFont(path.join(__dirname, "../fonts/Poppins.ttf"), {
  family: "Poppins"
})

router.get("/", async (req, res) => {

try {

const {
author,
title,
album,
image,
duration,
progress
} = req.query

// valores por defecto
const Author = author || "Unknown Artist"
const Title = title || "Unknown Title"
const Album = album || "Unknown Album"
const Image = image || "https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60"

// duración total de la canción
const Duration = Number(duration) || 180000

// tiempo actual
const Progress = Number(progress) || 30000

// calcular timestamps
const start = Date.now() - Progress
const end = start + Duration

const spotify = new canvacard.Spotify()
.setAuthor(Author)
.setTitle(Title)
.setAlbum(Album)
.setImage(Image)
.setStartTimestamp(start)
.setEndTimestamp(end)

// construir card
const data = await spotify.build("Poppins")

res.setHeader("Content-Type", "image/png")
res.end(data)

} catch (error) {

res.status(500).json({
status: false,
error: error.message
})

}

})

module.exports = router