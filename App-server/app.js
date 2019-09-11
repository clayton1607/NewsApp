const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const routes = require('./src/routes/mainRoutes');

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// middleware
app.use(cors())

// routing
app.get('/', (rq, rs) => {
  rs.send('Hellos from App - Server!');
});
// app.use('/newsapp/v1', routes);
// app.use('/test', testRouter);

// port config
app.listen(port, () => {
  console.log(`Listening on port:`,port);
});
