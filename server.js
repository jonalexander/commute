var express = require('express')
var axios = require('axios')
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});
app.listen(3006, function () {
  console.log('Example app listening on port 3006!')
});

// app.get('/yelpResults/:type/:lat/:lng/:radius/:limit/',  (req, res) => {
// http://api.wunderground.com/api/4c9321c345fc142e/almanac/q/MA/Boston.json
app.get('/get-weather-data',  (req, res) => {
  var state = req.params.state
  var city =  req.params.city

  axios.get(`http://api.wunderground.com/api/4c9321c345fc142e/almanac/q/${state}/${city}.json`)
    .then( (response) => {
      res.send(JSON.stringify(response.data))
    })
    .catch( (err) => {
      console.error(err)
    })
});
