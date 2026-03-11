import { createCanvas, loadImage } from "skia-canvas"

export default async function handler(req, res) {

try {

const {
author = "Unknown Artist",
title = "Unknown Title",
album = "Unknown Album",
image = "https://i.scdn.co/image/ab67616d00001e02e346fc6f767ca2ac8365fe60",
duration = 180000,
progress = 30000
} = req.query

const width = 800
const height = 250

const canvas = createCanvas(width, height)
const ctx = canvas.getContext("2d")

// fondo
ctx.fillStyle = "#121212"
ctx.fillRect(0, 0, width, height)

// portada
const cover = await loadImage(image)
ctx.drawImage(cover, 30, 30, 190, 190)

// textos
ctx.fillStyle = "#ffffff"
ctx.font = "bold 28px sans-serif"
ctx.fillText(title, 250, 80)

ctx.fillStyle = "#b3b3b3"
ctx.font = "22px sans-serif"
ctx.fillText(author, 250, 120)

ctx.font = "20px sans-serif"
ctx.fillText(album, 250, 155)

// barra progreso
const barX = 250
const barY = 190
const barWidth = 500
const barHeight = 10

ctx.fillStyle = "#404040"
ctx.fillRect(barX, barY, barWidth, barHeight)

const percent = progress / duration
ctx.fillStyle = "#1db954"
ctx.fillRect(barX, barY, barWidth * percent, barHeight)

// exportar imagen
const buffer = await canvas.png

res.setHeader("Content-Type", "image/png")
res.send(buffer)

} catch (err) {

res.status(500).json({
error: err.message
})

}

}