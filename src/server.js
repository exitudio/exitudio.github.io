var fallback = require('express-history-api-fallback')
var express = require('express')
var path = require('path')

// var ssrView = require('./ssrView')

var app = express()

// app.use('/',ssrView)



app.use(express.static(path.join(__dirname, '../public')))
app.use(fallback('../public/index.html', { root: __dirname }))
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

var listener = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on port ' + listener.address().port) //Listening on port 8888
})

/**
 * Keep awake for heroku
 */
var http = require("http")
setInterval(function () {
  http.get("http://ekkasit.herokuapp.com")
}, 300000) // every 5 minutes (300000)

module.exports = app
