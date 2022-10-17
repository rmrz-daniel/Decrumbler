const express = require("express");
const app = express();
let cors = require('cors');
const mongoose = require("mongoose");
  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cookies').then(() => {
  console.log('Database successfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)
  
mongoose.Promise = global.Promise;
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use('/api', require('./api/testapi'));
  
  
app.use(
  function(err,req,res,next){
      res.status(422).send({ error: err.message})
  }
);

app.listen(process.env.PORT ||
  4444, () => {
      console.log("server is running + ");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});