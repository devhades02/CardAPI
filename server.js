const express = require("express")
const fs = require("fs")
const path = require("path")

const app = express()

const routesPath = path.join(__dirname, "api")

fs.readdirSync(routesPath).forEach(file => {

if (!file.endsWith(".js")) return

const routeName = file.replace(".js", "")
const route = require(`./api/${file}`)

app.use(`/${routeName}`, route)

})

app.get("/", (req, res) => {
res.json({
name: "Card API",
version: "1.0",
message: "API funcionando",
})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
console.log("API encendida en puerto", PORT)
})