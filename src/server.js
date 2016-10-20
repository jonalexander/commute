var express = require('express')
var app = express();
// var Yelp = require('yelp')
// var yelp = new Yelp({
//   consumer_key: 'dYmianbDvP9XNx6aky1JWQ',
//   consumer_secret: 'xavDwdB-fgQ-2qWEagu5gPPm8bM',
//   token: 'OugLAPKwTrBuwKB_BLhRO3wORxrmF8Im',
//   token_secret: '7uZ1nMr-dngRH2VCGLDCOmPV-UY',
// });
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});
app.listen(3006, function () {
  console.log('Example app listening on port 3006!')
});
//https://crossorigin.me/http://api.wunderground.com/api/${key}/almanac/q/${state}/${city}.json

// app.get('/yelpResults/:type/:lat/:lng/:radius/:limit/',  (req, res) => {
app.get('http://api.wunderground.com/api/4c9321c345fc142e/almanac/q/:state/:city.json',  (req, res) => {
  if (req.params.radius <= 40000) {
    searchParams['radius_filter'] = req.params.radius
  }
  yelp.search(searchParams)
  .then(function (data) {
    res.json(data);
  })
  .catch(function (err) {
    console.error(err)
  })
});
