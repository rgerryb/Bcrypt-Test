const express = require('express')
const router = express.Router()

const data = require('../data/flashCardData.json').data
//const {data} = require('../data/flashCardData.json)
const cards = data.cards
//const { cards } = data

//buka /cards redirect ke id card random
router.get('/', (req, res) => {
    let totalCards = cards.length
    let randomId = Math.floor(Math.random() * totalCards)
   
    res.redirect(`/cards/${randomId}?side=soal`)
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    const {side} = req.query
    const text = cards[id][side]
    const {hint} = cards[id]
    let templateData = {id, text, hint} // ini shorthand properties

    if (side == "jawaban") {
        templateData = { id, text} //ini shorthand properties
        templateData.sidenya = "soal"
        templateData.SideToDisplay = "Lihat Soal"
    } else if (side == "soal") {
        templateData.sidenya = "jawaban"
        templateData.SideToDisplay = "Lihat Jawaban"
    } else if (!side) {
        res.redirect(`/cards/${id}?side=soal`)
    }

    res.locals = templateData
    res.render('cards')
})

module.exports = router