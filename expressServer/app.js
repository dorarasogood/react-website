const express = require('express');
var cors = require('cors');
const app = express();
const port = 4200;

app.use(cors());

app.get('/', (req, res)=>{
  // res.send('Hello World!');
  var str = 'abc = ' + port;
  // res.json({msg: 'This is CORS-enabled for all origins!'})
  res.json({msg: str});
  console.log("AAA000");
});

app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`)
});
