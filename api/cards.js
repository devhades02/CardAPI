import { Rank, Welcomer, LevelUp, Quote } from "canvacard"

export default async function handler(req, res) {

try {

const { pathname } = new URL(req.url, `http://${req.headers.host}`)
const params = new URLSearchParams(req.url.split("?")[1])

const avatar = params.get("avatar") || "https://i.imgur.com/1X6GQkS.jpg"
const name = params.get("name") || "User"
const level = Number(params.get("level")) || 1
const xp = Number(params.get("xp")) || 0
const text = params.get("text") || "Hola"
const bg = params.get("bg")

// RANK
if (pathname.includes("/rank")) {

const card = await new Rank()
.setAvatar(avatar)
.setUsername(name)
.setCurrentXP(xp)
.setRequiredXP(1000)
.setLevel(level)
.build()

res.setHeader("Content-Type", "image/png")
return res.send(card)

}

// PROFILE
if (pathname.includes("/profile")) {

const card = await new Rank()
.setAvatar(avatar)
.setUsername(name)
.setCurrentXP(xp)
.setRequiredXP(1000)
.setLevel(level)
.build()

res.setHeader("Content-Type", "image/png")
return res.send(card)

}

// WELCOME
if (pathname.includes("/welcome")) {

const card = await new Welcomer()
.setAvatar(avatar)
.setUsername(name)
.setBackground(bg || "https://i.imgur.com/9R3sK9S.jpg")
.build()

res.setHeader("Content-Type", "image/png")
return res.send(card)

}

// LEVELUP
if (pathname.includes("/levelup")) {

const card = await new LevelUp()
.setAvatar(avatar)
.setUsername(name)
.setLevel(level)
.build()

res.setHeader("Content-Type", "image/png")
return res.send(card)

}

// QUOTE
if (pathname.includes("/quote")) {

const card = await new Quote()
.setAvatar(avatar)
.setUsername(name)
.setText(text)
.build()

res.setHeader("Content-Type", "image/png")
return res.send(card)

}

return res.status(404).json({
error: "Endpoint no encontrado"
})

} catch (e) {

return res.status(500).json({
error: e.message
})

}

}