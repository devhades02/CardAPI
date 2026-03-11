const express = require("express")
const cards = require("./api/cards")

const app = express()

app.use("/", cards)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
console.log("✅ Hady Cards API corriendo en puerto " + PORT)
})