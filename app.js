
const express = require('express') // 套用express
const app = express()
const port = 3000

const exphbs = require('express-handlebars') // 套用handlebars
const mongoose = require('mongoose') //套用mongoose
const methodOverride = require('method-override')
const bodyParser = require('body-parser')// body-parser 進行前置處理以利用HTTP動詞
const routes = require('./routes')// 將 request 導入路由器

require('./config/mongoose')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(express.static('public')) //載入CSS js等
app.use(routes)//所有路由從routes走


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})

