const mongoose = require('mongoose') //套用mongoose

require('dotenv').config()
console.log(process.env.MY_ENV)  // 設定連線到 mongoDB
mongoose.connect(process.env.MY_ENV, { useNewUrlParser: true, useUnifiedTopology: true })

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db