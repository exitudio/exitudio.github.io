var fallback = require('express-history-api-fallback')
var express = require('express')
var path = require('path')

// var ssrView = require('./ssrView')

var app = express()

// app.use('/',ssrView)



app.use(express.static(path.join(__dirname, '../')))
app.use(fallback('../index.html', { root: __dirname }))
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../', 'index.html'))
})

var listener = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on port ' + listener.address().port) //Listening on port 8888
})

module.exports = app
