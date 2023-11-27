var express = require('express');
const {TemperatureReaderModel, TemperatureReaderSchema} = require('../schema/temperature_reader');


const router = express.Router();
/* GET home page. */
router.get('/', async function(req, res, next) {
  const sort = {'_id': -1}
  const temps = await TemperatureReaderModel.findOne().sort(sort);
  console.log(temps)
  res.render('index', { title:{
    title1: temps.temperature,
    title2: temps.humidity,
    title3: temps.aqi
  }  
});
  
});
module.exports = router;





