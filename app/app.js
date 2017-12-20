const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')

const { logErrors, errorHandler } = require('./utils/errorHandlers');

const app = express();

app.use(cors());
app.use(bodyParser.json());

if(process.env.NODE_ENV === 'dev') {
  app.use(morgan('combined'));
}

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Server is running');
});

const restaurantRoutes = require('./routes/restaurant')
app.use('/api/restaurants', restaurantRoutes);

app.use(logErrors)
app.use(errorHandler)

const server = app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});


module.exports = server;
