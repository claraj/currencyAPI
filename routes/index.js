var express = require('express');
var router = express.Router();
var exchangeRate = require('../services/exchange')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/convert', function(req, res, next){
  var query = req.query
  
  let toCurrency = query.to_currency 
  let dollars = query.dollars
  
  exchangeRate(toCurrency).then(function( response ) {
    let data = response.data 
    let exchangeRate = data.rates[toCurrency]
    let convertedAmount = dollars * exchangeRate

    let shortConvertedAmount = convertedAmount.toFixed(3) // 3 decimal places

    // send a page showing this information
    res.render('results', {
      dollars: dollars,
      toCurrency: toCurrency,
      converted: shortConvertedAmount
    })
  })
})


/* GET About page */
router.get('/about', function(req, res, next){
  res.render('about', {about_text: 'My currency site!'})
})

module.exports = router;


