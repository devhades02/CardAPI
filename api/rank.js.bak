const express = require("express")
const router = express.Router()
const canvacard = require("canvacard")

router.get("/", async (req, res) => {

try {

const avatar = req.query.avatar
const banner = req.query.banner
const username = req.query.username || "User"
const discriminator = req.query.discriminator || "0001"

const xp = Number(req.query.xp) || 400
const requiredxp = Number(req.query.requiredxp) || 3000

const level = Number(req.query.level) || 10
const rank = Number(req.query.rank) || 3

const status = req.query.status || "online"

const border1 = req.query.border1 || "#22274a"
const border2 = req.query.border2 || "#001eff"

const progress1 = req.query.progress1 || "#14C49E"
const progress2 = req.query.progress2 || "#FF0000"

const font = req.query.font || "Cascadia Code PL"

const created = Number(req.query.created) || Date.now()

const card = new canvacard.Rank()

.setAvatar(avatar)

if (banner) card.setBanner(banner, true)

card

.setBadges(["Developer","Supporter"], false, true)

.setBorder([border1, border2], "vertical")

.setCurrentXP(xp)
.setRequiredXP(requiredxp)

.setRank(rank, "RANK", true)

.setLevel(level, "LEVEL")

.setStatus(status)

.setProgressBar([progress1, progress2], "GRADIENT", true)

.setUsername(username, discriminator, "#FFFFFF")

.setCreatedTimestamp(created)

const data = await card.build(font)

res.setHeader("Content-Type", "image/png")
res.send(data)

} catch (err) {

res.status(500).json({
error: err.message
})

}

})

module.exports = router