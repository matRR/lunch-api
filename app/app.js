const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')

const { logErrors, errorHandler } = require('./utils/errorHandlers');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'))

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Hello Heroku - travis test ! part 2 - this is not going to be deployed [ci skip]');
});

const restaurantRoutes = require('./routes/restaurant')
app.use('/api/restaurants', restaurantRoutes);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.use(logErrors)
app.use(errorHandler)
