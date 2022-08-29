// css template from https://www.free-css.com/free-css-templates/page281/dotnet
// npm install express path
// npm start

const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))


app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})