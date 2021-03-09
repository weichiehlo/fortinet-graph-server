const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pg = require('./pg.util');


const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

console.log(process.env.NODE_ENV)


app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/query', (req, res) => {

  pg.getQueryData(req.body)
  .then(response=>{
      res.status(200).send(response);
  })
  .catch(error =>{
      res.status(500).send(error);
  })
})

// const express = require('express');
// const cors = require('cors');
// const pg = require('./pg.util');





// const app = express();
// app.use(express.json());
// app.use(cors());



// app.get('/', (req, res) =>{
//     res.send("The server is running")
// })


// app.post('/query', (req, res) => {
//   pg.getQueryData(req.body)
//   .then(response=>{
//       res.status(200).send(response);
//   })
//   .catch(error =>{
//       res.status(500).send(error);
//   })
// })
 

// app.listen(process.env.PORT || 5000, () =>{
//     console.log(`App is Running on Port ${process.env.PORT}`);
// })



/**
 * 
 *  --> res = this is working
 *  signin --> POST = success/fail
 *   /register --> POST = user
 *  /profile/:userid  --> GET = user
 * /image --> PUT --> user
 * 
 */