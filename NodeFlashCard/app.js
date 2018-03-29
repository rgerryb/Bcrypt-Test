const express = require(`express`)
const app = express()

const bodyParser = require(`body-parser`)
const cookieParser = require(`cookie-parser`)

const mainRoutes = require('./routes/index.js')
const cardRoutes = require('./routes/cards.js')

const port = 14042

app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())

//exposse static public
app.use('/public',express.static('public'))

// pasang mesin template, pug
app.set('view engine', 'pug')

app.use(mainRoutes)
app.use('/cards', cardRoutes)

//bikin error kalao router salah
app.use((req, res, next) => {
    res.locals.status = req.cookies.username
    let errornya = new Error("Nothing")
    errornya.status = 404
    next(errornya)
 })
 
//error middleware
app.use((err, req, res, next) => {
    res.locals.status = err.status
    res.locals.errorMessage = err.message
    res.send(err.message)
})

app.listen(14042, () => {
    console.log("Power ON")
})