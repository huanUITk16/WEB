const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://test:123@test.7n5fcar.mongodb.net/test?retryWrites=true&w=majority');
module.exports = mongoose;