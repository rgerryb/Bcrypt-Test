const express = require(`express`)
const router = express.Router()

// rute pertama
router.get('/', (req, res, next) => {
    if (req.cookies.username){
        res.locals.username = req.cookies.username
        res.render("index")
    //res.send("Hello There")
    } else {
        res.redirect('/hello')
        //res.redirect('/hello')
    } /*else if {
        let bikinError = new Error ('No Username')
        next(bikinError)
    }*/
})


router.get('/hello', (req, res) => {
    if (req.cookies.username){
        res.redirect('/')
    //res.send("Hello There")
    } else {
        res.render('hello')
    }
})

router.post('/hello', (req, res) => {
   res.locals = res.body
   //res.locals.username = req.body.username
   res.cookie("username", req.body.username)
   res.redirect("/")
})

router.post('/goodbye', (req, res) => {
    res.clearCookie('username')
    res.redirect('/hello')
})

router.get('/terimakasih', (req, res, next) => {
console.log('one')
next()
})

router.get('/terimakasih', (req, res, next) => {
    console.log('two')
    res.send('Wah Gila Sih!')
    })

router.post('/hello', (req, res) => {
    res.redirect("/")
})

module.exports = router