const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

require('./database');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(morgan('dev'));
app.use(cors());

// Routes
app.use('/api/employees', require('./routes/employees.route'));

// Static Files

// Start the Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})