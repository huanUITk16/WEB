const mongoose = require('../config/mongo_config')
const TemperatureReaderSchema = new mongoose.Schema({
    temperature: Number,
    humidity: Number,
    aqi: Number
  });
  
const TemperatureReaderModel = mongoose.model('test', TemperatureReaderSchema,'test');

module.exports = {TemperatureReaderModel, TemperatureReaderSchema}