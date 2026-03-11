const express = require("express")
const canvacard = require("canvacard")

const app = express()

app.get("/", (req,res)=>{
res.json({
creator: "devhades02",
api: "Hady Cards API",
version: "1.0",
endpoints: [
"/rank",
"/profile",
"/welcome",
"/levelup",
"/goodbye",
"/quote"
]
})
})

/* RANK CARD */

app.get("/rank", async (req,res)=>{

let avatar = req.query.avatar
let name = req.query.name || "Usuario"
let level = req.query.level || 1
let xp = req.query.xp || 100

try{

const card = await new canvacard.Rank()
.setAvatar(avatar)
.setUsername(name)
.setLevel(level)
.setXP(xp)
.build()

res.set("Content-Type","image/png")
res.send(card)

}catch(e){
res.json({error:e.message})
}

})

/* PROFILE */

app.get("/profile", async (req,res)=>{

let avatar = req.query.avatar
let name = req.query.name || "User"

try{

const card = await new canvacard.Profile()
.setAvatar(avatar)
.setUsername(name)
.build()

res.set("Content-Type","image/png")
res.send(card)

}catch(e){
res.json({error:e.message})
}

})

/* WELCOME */

app.get("/welcome", async (req,res)=>{

let avatar = req.query.avatar
let name = req.query.name || "Nuevo Usuario"
let bg = req.query.bg

try{

const card = await new canvacard.Welcome()
.setAvatar(avatar)
.setUsername(name)
.setBackground(bg)
.build()

res.set("Content-Type","image/png")
res.send(card)

}catch(e){
res.json({error:e.message})
}

})

/* LEVEL UP */

app.get("/levelup", async (req,res)=>{

let avatar = req.query.avatar
let name = req.query.name
let level = req.query.level

try{

const card = await new canvacard.LevelUp()
.setAvatar(avatar)
.setUsername(name)
.setLevel(level)
.build()

res.set("Content-Type","image/png")
res.send(card)

}catch(e){
res.json({error:e.message})
}

})

/* QUOTE */

app.get("/quote", async (req,res)=>{

let avatar = req.query.avatar
let name = req.query.name
let text = req.query.text

try{

const card = await new canvacard.Quote()
.setAvatar(avatar)
.setUsername(name)
.setText(text)
.build()

res.set("Content-Type","image/png")
res.send(card)

}catch(e){
res.json({error:e.message})
}

})

module.exports = app