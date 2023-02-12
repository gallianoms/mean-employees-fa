const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mean-crud-employee';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.error(error))

    module.exports = mongoose;